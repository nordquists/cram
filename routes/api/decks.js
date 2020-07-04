const express = require('express');
const router = express.Router();

const Deck = require('../../models/Deck');

// temporarily public while setting up

// @ route GET api/decks
// @ desc Get all decks belonging to the user
// @ access public
router.get('/', (req, res) => {
    Deck.find()
        .sort({ name: -1 })
        .then(decks => res.json(decks));
});

// @ route GET api/decks
// @ desc Get all decks belonging to the user
// @ access public
router.post('/', (req, res) => {
    const newDeck = Deck({
        name: req.body.name
    });
    newDeck.save()
        .then(item => res.json(item));
});

module.exports = router;