const express = require('express');
const router = express.Router();

const Deck = require('../../models/Deck');

// temporarily public while setting up

// @ route GET api/decks
// @ desc Get all decks belonging to the user
// @ access private
router.get('/', async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];

        //  delete the excluded fields
        excludedFields.forEach(element => delete queryObj[element]);

        // find documents in database
        let query = Deck.find(queryObj);

        // sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }

        // allow request to only certain fields
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        // pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 100;
        const skip = (page - 1) * limit;

        query = query.skip(skip).limit(limit);

        if (req.query.page) {
            const numDecks = await Deck.countDocuments();
            if (skip >= numDecks) throw new Error('This page does not exist');
        }

        // send query
        const decks = await query;

        const response = {
            status: true,
            count: decks.length,
            data: { decks }
        }

        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({
            status: false,
            message: err
        });
    }
});

// @ route POST api/decks
// @ desc Create a new deck
// @ access private
router.post('/', (req, res) => {
    const newDeck = Deck({
        name: req.body.name,
        is_private: req.body.is_private
    });
    newDeck.save().then(deck => res.status(201).json(deck));
});

// @ route GET api/decks/:id
// @ desc Get a deck by id
// @ access private
router.get('/:id', (req, res) => {
    Deck.findById(req.params.id)
        .then(deck => res.status(200).json(deck))
        .catch(err => res.status(404).json({error: err}));
});

// @ route PATCH api/decks/:id
// @ desc Patch a deck by id
// @ access private
router.patch('/:id', (req, res) => {
    Deck.updateOne({ _id: req.params.id },{ $set: req.body })
        .then(deck => res.json(deck))
        .catch(err => res.status(404).json({status: false}));
});

// @ route DELETE api/decks/:id
// @ desc Delete a deck
// @ access private
router.delete('/:id', (req, res) => {
    Deck.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({status: true})))
        .catch(err => res.status(404).json({status: false, error: err}));
});

module.exports = router;