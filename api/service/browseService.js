const Deck = require('../../models/Deck');
const DeckStats = require('../../models/DeckStats');
const { topNDueDecks } = require('./studyService');

CATEGORY_ROTATION = "Jeopardy"

RECENT_WINDOW = 4
VIEW_ALL_LIMIT = 10

module.exports = {
    browseDecks,
    studyBrowse,
    recentDecks,
    getTopDecks,
    getFeaturedDecks,
    myDecks
}

async function studyBrowse({ user_id }) {
    const recent = await recentDecks({ user_id: user_id, limit: 4 });
    const dueDecks = await topNDueDecks({ N: 5, user_id: user_id });
    const my = await myDecks({ user_id: user_id, limit: 4})
    const recentRow = createRow(recent.decks, "Recent", "/recent")
    const myRow = createRow(my.decks, "My Decks", "/my")
    return {
        upNext: dueDecks,
        rows: [recentRow, myRow]
    }
}

async function myDecks({ user_id, limit }) {
    const user = await User.findOne({ sub: user_id });

    const my = await Deck.find({ creator: user._id })
                                        .sort({ last_edited: -1})
                                        .limit(limit);

    const formattedDecks = await addFormattedStats(my, user._id);

    return {
        decks: formattedDecks
    }
}

// find N most recent decks for a user, return their ids and basic stats
async function recentDecks({ user_id, limit }) {
    // returns information for the study browse page
    const user = await User.findOne({ sub: user_id });

    // get all recent decks 
    const recent = await DeckStats.find({ user_id: user._id })
                                        .sort({ last_studied: -1})
                                        .populate('deck_id')
                                        .limit(limit);

    return {
        decks: recent.map(deck => createBrowseElementWithStats(deck))
    }
}

async function getTopDecks({ user_id }) {
    let user = null;
    if (user_id) {
        user = await User.findOne({ sub: user_id });
    }
    
    var decks = await Deck.find({ is_private: false }).sort({users: -1}).limit(VIEW_ALL_LIMIT);
    if (user_id) formattedDecks = await addFormattedStats(decks, user._id);
    else formattedDecks = addFormatted(decks);
    
    return {
        decks: formattedDecks
    }
}

async function getFeaturedDecks({ user_id }) {
    let user = null;
    if (user_id) {
        user = await User.findOne({ sub: user_id });
    } 

    var decks = await Deck.find({ featured: true, is_private: false }).limit(VIEW_ALL_LIMIT);
    if (user_id) var formattedDecks = await addFormattedStats(decks, user._id);
    else var formattedDecks = addFormatted(decks);

    return {
        decks: formattedDecks
    }
}


// returns rows for the day when a user is not logged in
async function browseDecks({ user_id }) {
    // browse is made up of three rows:
    // 1. featured decks, which are manually assigned by admins
    // 2. most popular decks, top by number of users
    // 3. category of the day 
    let user = null;
    if (user_id) {
        user = await User.findOne({ sub: user_id });
    }

    const table = {};
    table.rows = [];
    
    // search for the decks that are featured
    var decks = await Deck.find({ featured: true, is_private: false }).limit(4);
    // if a user is asking, add stats to the decks if they have them
    if (user_id) var formattedDecks = await addFormattedStats(decks, user._id);
    // otherwise, just format
    else var formattedDecks = addFormatted(decks);
    table.rows.push(createRow(formattedDecks, "Featured Decks", "/featured"))

    decks = await Deck.find({ is_private: false }).sort({users: -1}).limit(4);
    if (user_id) formattedDecks = await addFormattedStats(decks, user._id);
    else formattedDecks = addFormatted(decks);
    table.rows.push(createRow(formattedDecks, "Most Popular Decks", "/top"))
    
    decks = await Deck.find({ categories: CATEGORY_ROTATION, is_private: false }).limit(4);
    if (user_id) formattedDecks = await addFormattedStats(decks, user._id);
    else formattedDecks = addFormatted(decks);
    table.rows.push(createRow(formattedDecks, CATEGORY_ROTATION))
    
    return table; 
}

// helpers --------

async function addFormattedStats(decks, user_id) {
    // function for getting stats from a deck if they exist for a user
    // returns formatted objects to construct row
    var newDecks = [];
    for(const deck of decks) {
        var deck_stat = await DeckStats.findOne({ user_id: user_id, deck_id: deck._id }).populate('deck_id')
        if (deck_stat) newDecks.push(createBrowseElementWithStats(deck_stat));
        else newDecks.push(createBrowseElement(deck));
    }
    return newDecks
}

function addFormatted(decks) {
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