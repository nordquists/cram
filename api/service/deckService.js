const User = require('../../models/User');
const Deck = require('../../models/Deck');
const Card = require('../../models/Card');
const DeckStats = require('../../models/DeckStats');
const Role = require('../miscellany/roles')
const isValidId = require('../miscellany/isValidId');

module.exports = {
    newDeck,
    editDeck,
    getDeck,
    getDeckStats
};

async function newDeck({ user_id, title, description, cards, is_private, categories }) {
    const user = await User.findOne({ sub: user_id });
    if(!user.username) throw "Username needs to be defined"

    const ids = await Card.insertMany(cards);
    const newDeck = new Deck({
        title: title,
        description: description,
        creator: user._id,
        creator_sub: user_id,
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

async function editDeck({ user_id, role, deck_id, request }) {
    if(!isValidId(deck_id)) throw 'Deck not found';
    const deck = await Deck.findOne({ _id: deck_id });
    if (!deck) throw 'Deck not found';
    const user = await User.findOne({ sub: user_id });
    if (role != Role.Admin && !deck.creator.equals(user._id)) throw { name:'UnauthorizedError' }; 
    const {cards, ...values } = request

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i]
        if (card.deleted) {
            // if the card was requested to be deleted 
            await Card.find({ _id: card._id }).remove();
            await Deck.update(
                    { _id: deck_id }, 
                    { $pull: { cards: card._id }
                })
        } else {
            if (card._id) {
                await Card.update({_id: card._id}, 
                    {$set : {front: card.front, back: card.back, index: card.index, last_edited: Date.now()}});
            } else {
                const newCard = Card({ front: card.front, back: card.back, index: card.index, last_edited: Date.now() });
                await newCard.save(newCard);
                await Deck.update(
                        { _id: deck_id }, 
                        { $push: { cards: newCard._id }
                    })
            }
        }
    }
    await Deck.updateOne({ _id: deck_id}, {...values});
    return deckInfo(await Deck.findById(deck_id).populate('cards'));
}

async function getDeck({ user_id, role, deck_id }) {
    if(!isValidId(deck_id)) throw 'Deck not found';
    const user = await User.findOne({ sub: user_id });
    const deck = await Deck.findById(deck_id).populate('cards');
    if (!deck) throw 'Deck not found';
    if (role != Role.Admin && (!deck.creator.equals(user._id) && deck.is_private)) throw 'UnauthorizedError'; 

    return deckInfo(deck);
}

// deck stats functions ---------

async function initDeckStats({ user_id, deck_id }) {
    // this function is called the first time a deck is opened to study by user_id
    const deck = await Deck.findById(deck_id);
    let cards = []
    deck.cards.forEach(card => cards.push({ _card: card}));

    const newDeckStats = new DeckStats({
        deck_id: deck_id,
        user_id: user_id,
        cards: cards
    });
    await newDeckStats.save()
    const deckStats = await DeckStats.findOne({ deck_id: deck_id, user_id: user_id }).populate('deck_id', '_id name description creator categories').populate('cards._card');

    return statsInfo(deckStats);
}

async function editDeckStats({ user_id, deck_id, updated_cards, times_studied, last_studied }) {
    const deckStats = await DeckStats.findOne({ deck_id: deck_id, user_id: user_id });

    let cards = []
    for (const card of updated_cards) {
        deckStats.cards.find(x => { card._id == x._card}) = card;
    }

    await DeckStats.updateOne({ deck_id: deck_id, user_id: user_id }, {...request, cards: ids});

    deckStats.times_studied = times_studied;
    deckStats.last_studied = last_studied;
    updated_cards.forEach(card => deckStats.cards.find(x => x._id == card._id) = card);
    
    return statsInfo(deckStats);
}

async function getDeckStats({ user_id, role, deck_id }) {
    if(!isValidId(deck_id)) throw 'Deck not found';
    const deck = await Deck.findById(deck_id);
    const user = await User.findOne({ sub: user_id });
    if (role != Role.Admin && (!deck.creator.equals(user._id) && deck.is_private)) throw 'UnauthorizedError'; 
    const deckStats = await DeckStats.findOne({ deck_id: deck_id, user_id: user._id }).populate('deck_id user_id cards._card')
    // if a stats document hasn't been generated for this deck yet, generate it
    if (!deckStats) return initDeckStats({ user_id: user._id, deck_id: deck_id });

    // we need to check if we have the most up to date deck in our deck stats, if not
    // we need to synchronize the two
    if (deck.last_edited > deckStats.last_updated) {
        return synchronizeDeckStats(user._id, deck_id)
    }
    return statsInfo(deckStats);
}

function statsInfo(stats) {
    const { deck_id: {_id, title, description, categories }, user_id: { username }, percentages, cards, last_studied } = stats;
    return {
        deck_id: _id,
        title: title,
        description: description,
        categories: categories,
        creator: username,
        percentages: percentages,
        cards: cards,
        last_studied: last_studied
    }
}

function deckInfo(deck) {
    const { title, description, categories, creator, cards } = deck;
    return { title, description, categories, creator, cards };
}

// helpers ------------

function synchronizeDeckStats(user_id, deck_id) {
    /*
        Synchronizes out-of-date DeckStats models, very expensive but should be
        run very infrequently 

        The only thing that can be out of date, is the array of cards
    */
    Deck.findById(deck_id)
        .then(deck => {
            DeckStats.findOne({ deck_id: deck_id, user_id: user_id })
                .then(deckStats => {
                    // 1. does the card exist in deck stats, if not add it
                    // 2. does a card exist in deck stats but not in the deck, if so remove it
                    for (const card_id of deck.cards) {
                        for (const card of deckStats.cards) {
                            if (card_id.equals(card._card)) {
                                exists = true;
                            }
                        }
                        DeckStats.update(
                            { deck_id: deck_id, user_id: user_id },
                            { $push: { cards: { _card : card_id } }
                        })
                            
                    }
                    for (const card of deckStats.cards) {
                        exists = false;
                        for (const card_id of deck.cards) {
                            if (card_id.equals(card._card)) {
                                exists = true;
                            }
                        }
                        DeckStats.update(
                            { deck_id: deck_id, user_id: user_id },
                            { $pull: { cards: { _card : card._card } }
                        })
                    }
                    deckStats.last_updated = Date.now();
                    deckStats.save();
                })
                .catch(err => {throw err})
        })
        .catch(err => {throw err}) 
}