const User = require('../../models/User');
const Deck = require('../../models/Deck');
const Card = require('../../models/Card');
const DeckStats = require('../../models/DeckStats');
const Role = require('../miscellany/roles')
const isValidId = require('../miscellany/isValidId');

CUTOFF_DIFFICULTY_ORANGE = 1.0;
CUTOFF_DIFFICULTY_GREEN = 0.5;

module.exports = {
    newDeck,
    statsInfo,
    editDeck,
    getDeck,
    getDeckStats,
    editDeckStats,
    studyStatsInfo
};

async function newDeck({ user_sub, title, description, cards, is_private, categories }) {
    const user = await User.findOne({ sub: user_sub });
    if(!user.username) throw "Username needs to be defined"

    const ids = await Card.insertMany(cards);
    const newDeck = new Deck({
        title: title,
        description: description,
        creator: user._id,
        creator_sub: user_sub,
        is_private: is_private,
        categories: categories,
        cards: ids
    });

    await newDeck.save();

    return {
        id: newDeck._id,
        name: newDeck.name
    }
}

async function getDeck({ user_sub, deck_id, type }) {
    if(!isValidId(deck_id)) throw 'Deck not found';
    const deck = await Deck.findById(deck_id).populate('cards');
    if (!deck) throw 'Deck not found';
    if (!deck.creator_sub === user_sub && deck.is_private) throw 'UnauthorizedError'; 
    if (type === 'edit' && !deck.creator_sub === user_sub) throw 'UnauthorizedError'; 

    return deckInfo(deck);
}

async function editDeck({ user_sub, deck_id, request }) {
    if(!isValidId(deck_id)) throw 'Deck not found';
    const deck = await Deck.findOne({ _id: deck_id });
    if (!deck) throw 'Deck not found';
    if (!deck.creator_sub === user_sub && deck.is_private) throw 'UnauthorizedError'; 
    const {cards, ...values } = request;

    let newCards = [];
    for (var i = 0; i < cards.length; i++) {
        for (var j = 0; j < cards.length; j++) {
            var card = cards[j];
            if (card.index == i) {
                if (card._id) {
                    await Card.updateOne({_id: card._id}, 
                        {$set : {front: card.front, back: card.back, index: card.index, last_edited: Date.now()}});
                    newCards.push(card._id);
                } else {
                    const newCard = Card({ front: card.front, back: card.back, index: card.index, last_edited: Date.now() });
                    await newCard.save(newCard);
                    newCards.push(newCard._id)
                }
            }
        }
    }

    await Deck.updateOne({ _id: deck_id}, {last_edited: Date.now(), cards: newCards, ...values});
}

async function initDeckStats({ user_sub, deck_id, deck }) {
    // this function is called the first time a deck is opened to study by user_id
    let cards = []
    deck.cards.forEach(card => cards.push({ _card: card}));
    
    // find user so we can store their id
    const user = await User.findOne({ sub: user_sub });

    const newDeckStats = new DeckStats({
        deck_id: deck_id,
        user_id: user._id,
        user_sub: user_sub,
        cards: cards
    });
    await newDeckStats.save()
}

async function getDeckStats({ user_sub, deck_id }) {
    if(!isValidId(deck_id)) throw 'Deck not found';
    const deck = await Deck.findById(deck_id);

    if (!deck) throw 'Deck not found';

    // check if the user is authorized to access this deck
    if (!deck.creator_sub === user_sub && deck.is_private) throw 'UnauthorizedError'; 

    // find the deck stats associated with the deck id and the user, if they exist
    let deckStats = await DeckStats.findOne({ deck_id: deck_id, user_sub: user_sub })

    // if a stats document hasn't been generated for this deck and user yet, generate it
    if (!deckStats) return initDeckStats({ user_sub: user_sub, deck_id: deck_id, deck: deck });

    // we need to check if we have the most up to date deck in our deck stats, if not
    // we need to synchronize the two
    if (deck.last_edited > deckStats.last_updated) {
        await synchronizeDeckStats(deck_id, user_sub)
    }
}

async function editDeckStats({ user_sub, deck_id, cards }) {
    if(!isValidId(deck_id)) throw 'Deck not found';

    // find the deck stats associated with the deck id and the user, if they exist
    let deckStats = await DeckStats.findOne({ deck_id: deck_id, user_sub: user_sub })

    // if there are no deck stats we have to create them first
    if (!deckStats) {
        // await initDeckStats({ user_id: user._id, deck_id: deck_id });
        deckStats = await DeckStats.findOne({ deck_id: deck_id, user_id: user._id });
    }

    deckStats.cards.forEach((card) => {
        for (const updatedCard of cards) { 
            if (card._id == updatedCard._id) {
                card.difficulty = updatedCard.difficulty;
                card.days_between_review = updatedCard.days_between_review;
                card.times_studied = updatedCard.times_studied;
                card.last_studied = updatedCard.last_studied;
            }
        }
    })

    deckStats.times_studied = deckStats.times_studied + 1;
    await deckStats.save();

    // helper to update our derived data
    await updateDerived(deck_id, user_sub);
}

// helpers ------

async function updateDerived(deck_id, user_sub) {
    let deckStats = await DeckStats.findOne({ deck_id: deck_id, user_sub: user_sub })

    if (deckStats.times_studied != 0) {
        var due = Number.MAX_SAFE_INTEGER,
        sum = 0.0,
        percentage_total = 0.0,
        total = 0,
        green = 0.0,
        orange = 0.0,
        red = 0.0;

        for (const card of deckStats.cards) {
            if (card.times_studied != 0 && card.difficulty != null) {
                // percentage calculations
                if(card.difficulty < CUTOFF_DIFFICULTY_GREEN) { green++; }
                else if (card.difficulty < CUTOFF_DIFFICULTY_ORANGE) { orange++; }
                else { red++; }

                // average difficulty calculation
                sum += card.difficulty;

                // find the closest due date
                due = Math.min(due, new Date(card.last_studied).getTime() + (card.days_between_review * 24 * 60 * 60 * 1000));
                
                total++;
            }
            percentage_total++;
        }

        deckStats.avg_difficulty = sum / total;
        deckStats.percentages.green = green / percentage_total;
        deckStats.percentages.orange = orange / percentage_total;
        deckStats.percentages.red = red / percentage_total;
        deckStats.due = due;
       
        deckStats.last_studied = Date.now();
        await deckStats.save();
    }
}

async function synchronizeDeckStats(deck_id, user_sub) {
    /*
        Synchronizes out-of-date DeckStats models, very expensive but should be
        run very infrequently 

        The only thing that can be out of date, is the array of cards
    */
    const deck = await Deck.findOne({_id : deck_id}).populate('cards')
    const deckStats = await DeckStats.findOne({ deck_id: deck_id, user_sub: user_sub })

    let deckCards = deck.cards
    let deckStatsCards = deckStats.cards

    deckCards.sort(compareDecks);
    deckStatsCards.sort(compareDeckStats);

    var x = 0; // current position in subject list
    var y = 0; // current position in target list
    var i = []; // list of inserts
    var d = []; // list of deletes

    while (x < deckStatsCards.length || y < deckCards.length) {
        if (y >= deckCards.length) {
            d.push(deckStatsCards[x]._card); // delete
            x++;
        } else if (x >= deckStatsCards.length) {
            i.push(deckCards[y]._id); // insert
            y++;
        } else if (deckStatsCards[x]._card < deckCards[y]._id) {
            d.push(deckStatsCards[x]._card); // delete
            x++;
        } else if (deckStatsCards[x]._card > deckCards[y]._id) {
            i.push(deckCards[y]._id); // insert
            y++;
        } else {
            x++;
            y++;
        }
    }

    for (var deleted of d) {
        for (var index = 0; index < deckStats.cards.length; index++) {
            if (deckStats.cards[index]._card === deleted) {
                deckStats.cards.splice(index, 1);
            }
        }
    }

    for (var inserted of i) {
        deckStats.cards.push({_card : inserted});
    }

    await deckStats.save();

    await updateDerived(deck_id, user_sub)
}

function statsInfo(stats) {
    const { percentages, last_studied, user_sub, deck_id: {_id, title, description, categories, creator, creator_sub, cards } } = stats;
    const is_owner = user_sub === creator_sub
    return {
        deck_id: _id,
        title: title,
        description: description,
        categories: categories,
        creator: creator.username,
        percentages: percentages,
        cards: cards,
        last_studied: last_studied,
        is_owner: is_owner
    }
}

function studyStatsInfo(stats) {
    const { percentages, last_studied, cards, deck_id: {_id, title, description, categories } } = stats;
    return {
        deck_id: _id,
        title: title,
        description: description,
        categories: categories,
        percentages: percentages,
        cards: cards,
        last_studied: last_studied,
    }
}

function deckInfo(deck, user_id) {
    const { title, description, categories, creator, cards, is_private } = deck;
    const is_owner = creator.equals(user_id);
    return { title, description, categories, creator, cards, is_owner, is_private };
}

function compareDecks(a, b) {
    if ( a._id < b._id ){
        return -1;
    }
    if ( a._id > b._id ){
        return 1;
    }
    return 0;
}

function compareDeckStats(a, b) {
    if ( a._card < b._card ){
        return -1;
    }
    if ( a._card > b._card ){
        return 1;
    }
    return 0;
}