const express = require('express');
const router = express.Router();

const Deck = require('../../models/Deck');

// temporarily public while setting up

// @ route GET api/decks
// @ desc Get all decks belonging to the user
// @ access private
router.get('/', (req, res) => {
    Deck.find()
        .sort({ name: -1 })
        .then(decks => res.json(decks));
});

// @ route POST api/decks
// @ desc Create a new deck
// @ access private
router.post('/', (req, res) => {
    const newDeck = Deck({
        name: req.body.name
    });
    newDeck.save()
        .then(item => res.json(item));
});

// @ route GET api/decks/:id
// @ desc Get a deck by id
// @ access private
router.get('/:id', (req, res) => {
    Deck.findById(req.params.id)
        .then(deck => res.json(deck))
        .catch(err => res.status(404).json({success: false}));
});

// @ route PATCH api/decks/:id
// @ desc Patch a deck by id
// @ access private
router.patch('/:id', (req, res) => {
    Deck.findById(req.params.id)
        .then(deck => res.json(deck))
        .catch(err => res.status(404).json({success: false}));
});

// @ route DELETE api/decks/:id
// @ desc Delete a deck
// @ access private
router.delete('/:id', (req, res) => {
    Deck.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;