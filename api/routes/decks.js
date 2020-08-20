const Joi = require("joi");

const express = require('express');
const router = express.Router();
// const Deck = require('../../models/Deck');
const authorize = require('../middleware/authorize');
// const Role = require('../miscellany/roles')
const DeckStats = require('../../models/DeckStats');


const deckService = require('../service/deckService');
const deckServiceV2 = require('../service/deckServiceV2');
const validateRequestSchema = require('../middleware/validateRequestSchema');
const linkUser = require("../middleware/linkUser");


// our deck routes
router.post('/', authorize.required, linkUser, createDeckSchema, createDeck);
router.patch('/:id', authorize.required, editDeckSchema, editDeck);
router.get('/:id', authorize.required, linkUser, getDeck);
router.get('/stats/:id', authorize.required, linkUser, getStats);
router.patch('/stats/:id', authorize.required, linkUser, editStatsSchema, editStats);
router.get('/study/:id', authorize.required, linkUser, getStudyStats);

module.exports = router;


function createDeckSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().empty(''),
        is_private: Joi.boolean().required(),
        categories: Joi.array().items(Joi.string().empty('')),
        cards: Joi.array().items(Joi.object({
            front: Joi.string().required(),
            back: Joi.string().required(),
            index: Joi.number().required()
        }))
    });
    validateRequestSchema(req, next, schema);
}

function createDeck(req, res, next) {
    deckServiceV2.newDeck({...req.body, user_sub: req.user.sub })
        .then(({ ...newDeck }) => {
            res.json(newDeck);
        })
        .catch(next);
} 

function editDeckSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().empty(''),
        description: Joi.string().empty(''),
        is_private: Joi.boolean().empty(''),
        categories: Joi.array().items(Joi.string().empty('')),
        cards: Joi.array().items(Joi.object({
            _id: Joi.string(),
            front: Joi.string().empty(''),
            back: Joi.string().empty(''),
            deleted: Joi.boolean(),
            index: Joi.number().integer().required()
        }))
    });
    validateRequestSchema(req, next, schema);
}

function editDeck(req, res, next) {
    deckServiceV2.editDeck({request: req.body, deck_id: req.params.id, user_sub: req.user.sub, role: req.user.role })
        .then((editedDeck) => {
            res.json({ message: "successful"});
        })
        .catch(next);
}

function getDeck(req, res, next) {
    deckServiceV2.getDeck({ deck_id: req.params.id, user_sub: req.user.sub, type: req.body.type })
        .then((deck) => {
            res.json(deck);
        })
        .catch(next);
}

function getStats(req, res, next) {
    deckServiceV2.getDeckStats({ deck_id: req.params.id, user_sub: req.user.sub })
        .then(() => {
            DeckStats.findOne({ deck_id: req.params.id, user_sub: req.user.sub })
                .populate({
                    path: 'deck_id',
                    populate: {
                        path: 'creator'
                    }
                })
                .populate({
                    path: 'cards._card',
                })
                .then((result) => {
                    console.log(deckServiceV2.studyStatsInfo(result).cards);
                })
                .catch(next); 
            DeckStats.findOne({ deck_id: req.params.id, user_sub: req.user.sub })
                .populate({
                    path: 'deck_id',
                    populate: {
                        path: 'creator'
                    }
                })
                .populate({
                    path: 'deck_id',
                    populate: {
                        path: 'cards'
                    }
                })
                .then((result) => {
                    console.log(deckServiceV2.statsInfo(result).cards)
                    res.json(deckServiceV2.statsInfo(result));
                })
                .catch(next);                            
        })
        .catch(next);
}

function editStatsSchema(req, res, next) {
    const schema = Joi.object({
        cards: Joi.array().items(Joi.object({
            _card: Joi.object({
                _id: Joi.string()
            }),
            _id: Joi.string(),
            days_between_review: Joi.number().allow(null),
            times_studied: Joi.number().allow(null),
            difficulty: Joi.number(),
            last_studied: Joi.number().allow(null)
        }))
    });
    validateRequestSchema(req, next, schema);
}

function editStats(req, res, next) {
    deckServiceV2.editDeckStats({ deck_id: req.params.id, user_sub: req.user.sub, cards: req.body.cards })
        .then(() => {
            res.json({ message: "successful"});
        })
        .catch(next);
}

function getStudyStats(req, res, next) {
    deckServiceV2.getDeckStats({ deck_id: req.params.id, user_sub: req.user.sub })
        .then(() => {
            DeckStats.findOne({ deck_id: req.params.id, user_sub: req.user.sub })
                .populate({
                    path: 'deck_id',
                    populate: {
                        path: 'creator'
                    }
                })
                .populate({
                    path: 'cards._card',
                })
                .then((result) => {
                    res.json(deckServiceV2.studyStatsInfo(result));
                })
                .catch(next);                            
        })
        .catch(next);
}

// // temporarily public while setting up

// // @ route GET api/decks
// // @ desc Get all decks belonging to the user
// // @ access private
// router.get('/', authorize(), async (req, res) => {
//     try {
//         const queryObj = { ...req.query };
//         const excludedFields = ['page', 'sort', 'limit', 'fields'];

//         //  delete the excluded fields
//         excludedFields.forEach(element => delete queryObj[element]);

//         // find documents in database
//         let query = Deck.find(queryObj);

//         // sort
//         if (req.query.sort) {
//             const sortBy = req.query.sort.split(',').join(' ');
//             query = query.sort(sortBy);
//         }

//         // allow request to only certain fields
//         if (req.query.fields) {
//             const fields = req.query.fields.split(',').join(' ');
//             query = query.select(fields);
//         } else {
//             query = query.select('-__v');
//         }

//         // pagination
//         const page = req.query.page * 1 || 1;
//         const limit = req.query.limit * 1 || 100;
//         const skip = (page - 1) * limit;

//         query = query.skip(skip).limit(limit);

//         if (req.query.page) {
//             const numDecks = await Deck.countDocuments();
//             if (skip >= numDecks) throw new Error('This page does not exist');
//         }

//         // send query
//         const decks = await query;

//         const response = {
//             status: true,
//             count: decks.length,
//             data: { decks }
//         }

//         res.status(200).json(response);
//     } catch (err) {
//         res.status(404).json({
//             status: false,
//             message: err
//         });
//     }
// });

// // @ route POST api/decks
// // @ desc Create a new deck
// // @ access private
// router.post('/', authorize(), (req, res) => {
//     const newDeck = Deck({
//         name: req.body.name,
//         description: req.body.description,
//         cards: req.body.cards,
//         categories: req.body.categories,
//         is_private: req.body.is_private,
//         creator: req.user.id,
//     });
//     newDeck.save().then(deck => res.status(201).json(deck));
// });

// // @ route GET api/decks/:id
// // @ desc Get a deck by id
// // @ access private
// router.get('/:id', authorize(), (req, res) => {
//     Deck.findById(req.params.id)
//         .then(deck => {
//             if (!deck.is_private) return res.status(200).json(deck)
//             if (deck.creator == req.user.id) return res.status(200).json(deck)
//             return res.sendStatus(403)
//         })
//         .catch(err => res.status(404).json({error: err}));
// });

// // @ route PATCH api/decks/:id
// // @ desc Patch a deck by id
// // @ access private
// router.patch('/:id', authorize(), (req, res) => {
//     Deck.findById(req.params.id)
//     .then(deck => {
//         if (deck.creator == req.user.id) {
//             Deck.updateOne({ _id: req.params.id },{ $set: req.body })
//             .then(deck => res.json(deck))
//             // .catch(err => res.status(404).json({status: false}));
//         }
//         return res.sendStatus(403)
//     })
//     .catch(err => res.status(404).json({error: err}));

    
// });

// // @ route DELETE api/decks/:id
// // @ desc Delete a deck
// // @ access private
// router.delete('/:id', authorize(), (req, res) => {
//     Deck.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({status: true})))
//         .catch(err => res.status(404).json({status: false, error: err}));
// });
