const Deck = require('../../models/Deck');
const DeckStats = require('../../models/DeckStats');
const { JwksRateLimitError } = require('jwks-rsa');

CATEGORY_ROTATION = "Jeopardy"

RECENT_WINDOW = 
VIEW_ALL_LIMIT = 4

module.exports = {
    browseDecks
}

async function studyBrowse({ user_id }) {
    
}


// find N most recent decks for a user, return their ids and basic stats
async function recentDecks({ user_id }) {

}

// returns rows for the day when a user is not logged in
async function browseDecks({ user_id }) {
    // browse is made up of three rows:
    // 1. featured decks, which are manually assigned by admins
    // 2. most popular decks, top by number of users
    // 3. category of the day 
    if (user_id) {
        const user = await User.findOne({ sub: user_id });
    }

    const table = {};
    table.rows = [];
    
    // search for the decks that are featured
    var decks = await Deck.find({ featured: true, is_private: false }).limit(VIEW_ALL_LIMIT);
    // if a user is asking, add stats to the decks if they have them
    if (user_id) var formattedDecks = addFormattedStats(decks, user._id);
    // otherwise, just format
    else var formattedDecks = addFormatted(decks);
    formattedDecks
        .then(result => table.rows.push(createRow(result, "Featured Decks", "/featured")))
        .catch(err => {throw err});

    var decks = await Deck.find({ is_private: false }).sort({users: -1}).limit(VIEW_ALL_LIMIT);
    if (user_id) formattedDecks = addFormattedStats(decks, user._id);
    else formattedDecks = addFormatted(decks);
    formattedDecks
        .then(result => table.rows.push(createRow(result, "Most Popular Decks", "/top")))
        .catch(err => {throw err});
    
    var decks = await Deck.find({ categories: CATEGORY_ROTATION, is_private: false }).limit(VIEW_ALL_LIMIT);
    if (user_id) formattedDecks = addFormattedStats(decks, user._id);
    else formattedDecks = addFormatted(decks);
    formattedDecks
        .then(result => table.rows.push(createRow(result, CATEGORY_ROTATION)))
        .catch(err => {throw err});
    
    return table; 
}

// helpers --------

async function addFormattedStats(decks, user_id) {
    // function for getting stats from a deck if they exist for a user
    // returns formatted objects to construct row
    var newDecks = [];
    for(const deck of decks) {
        var deck_stat = await DeckStats.findOne({ user_id: user_id, deck_id: deck._id }).populate('deck_id', '_id name categories, cards')
        if (deck_stat) newDecks.push(createBrowseElementWithStats(deck_stat));
        else newDecks.push(createBrowseElement(deck));
    }
    return newDecks
}

async function addFormatted(decks) {
    var newDecks = [];
    for(const deck of decks) {
        newDecks.push(createBrowseElement(deck));
    }
    return newDecks
}

function createRow(decks, title, link) {
    const row = {}
    row.title = title;
    row.link = link || null;
    row.decks = decks;
    return row;
}

function createBrowseElement(deck) {
    const { _id, title, categories, cards } = deck;
    const terms = cards.length;
    return { _id, title, categories, terms}
}

function createBrowseElementWithStats(deck) {
    const { percentages, deck_id: { _id, title, categories, cards }} = deck;
    const terms = cards.length;
    return { _id, title, categories, terms, percentages}
}