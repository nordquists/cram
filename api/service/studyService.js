const Deck = require('../../models/Deck');
const DeckStats = require('../../models/DeckStats');
const Role = require('../miscellany/roles')

NEW_CARD_RATIO = 0.2;
NEW_CARD_CONSTANT = 15;
TOTAL_CARD_LIMIT = 30;

module.exports = {
    topNDueDecks,
    topNCards,
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

async function getToStudy({ user_id, deck_id }) {
    const deck = await DeckStats.findOne({ user_id: user_id, deck_id: deck_id});

    // get all the due cards + some new ones if available (if all are new, it returns )
    let toStudy = [];

    return toStudy.map(card)
}

// choose N cards to study, return their info and stats
async function topNCards({ N, user_id, deck_id }) {
    const deck = await DeckStats.findOne({ user_id: user_id, deck_id: deck_id});

    // select a few that haven't been studied before if at least N have been studied
}

// TODO: Review functionality

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

// helper functions --------
function isDue(card) {
    return (Date.now() > card.last_studied + card.days_between_review) ? true : false;
}