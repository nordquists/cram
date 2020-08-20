const Deck = require('../../models/Deck');
const DeckStats = require('../../models/DeckStats');
const Role = require('../miscellany/roles')

NEW_CARD_RATIO = 0.2;
NEW_CARD_CONSTANT = 15;
TOTAL_CARD_LIMIT = 30;

module.exports = {
    topNDueDecks,
    getToStudy,
};

// find top N decks that need to be studied, return their ids and basic stats
async function topNDueDecks({ N, user_id }) {

    const user = await User.findOne({ sub: user_id });

    // find all decks that this user has studied sorted by their average difficulty
    //    and when they were last studied
    const decks = await DeckStats.find({ user_id: user._id })
                                    .sort({avg_difficulty: -1, last_studied : 1})
                                    .populate('deck_id');

    // from the top of the array, find the decks which are due and add them to topN
    var topN = []
    for (const deck of decks) {
        if (Date.now() > deck.due) {
            topN.push(deck);
        } 
        if (topN.length >= N) break;
    }

    // returns only decks that are due in the order they are most needed to be studied
    return topN.map(deck => createBrowseElementWithStats(deck));
}

async function getToStudy({ user_sub, deck_id }) {
    const deck = await DeckStats.findOne({ user_sub: user_sub, deck_id: deck_id})
                                .populate({
                                    path: 'cards._card',
                                });

    if (deck.times_studied === 0) {
        let toStudy = [];
        // if we haven't studied this deck, we only have new cards.
        for (const card of deck.cards) {
            toStudy.push(card)
            if (toStudy.length >= 10) break;
        }
        
        return {
            deck_id: deck_id,
            cards: toStudy
        }
    } else {
        // get all the due cards + some new ones if available
        let toStudyBackup = [];
        let toStudy = [];
        let newCards = 0;
        for (const card of deck.cards) {
            if (isDue(card)) {
                toStudy.push(card)
            } else if (card.times_studied === 0) {
                if (newCards < 5) {
                    toStudy.push(card)
                }
            } else {
                toStudyBackup.push(card)
            }
        }
        if (toStudy.length < 10) {
            toStudyBackup.sort(compareCards)
            for (var i = 0; i <= 10 - toStudy.length; i++) {
                toStudy.push(toStudyBackup[i])
            }
        }
        
        return {
            deck_id: deck_id,
            cards: toStudy
        }
    }
}

// TODO: Review functionality

// helper functions --------

function createBrowseElementWithStats(deck) {
    const { percentages, deck_id: { _id, title, categories, cards }} = deck;
    const terms = cards.length;
    return { _id, title, categories, terms, percentages}
}

function studyBrowseDeckInfo(deck) {
    const { percentages, last_studied, deck_id: { _id, name, description, categories }} = deck;
    return { percentages, last_studied, _id, name, description, categories };
}

function studyDeckInfo(deck) {
    const { name, cards } = deck;
    return { name, cards };
}

function isDue(card) {
    return (Date.now() > card.last_studied + card.days_between_review) ? true : false;
}

function studyStatsInfo(stats) {
    const { percentages, last_studied, cards, deck_id } = stats;
    return {
        deck_id: deck_id,
        percentages: percentages,
        cards: cards,
        last_studied: last_studied,
    }
}

function compareCards(a, b) {
    if ( a.difficulty > b.difficulty ){
        return -1;
    }
    if ( a.difficulty < b.difficulty ){
        return 1;
    }
    return 0;
}