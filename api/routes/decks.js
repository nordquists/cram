const Joi = require("joi");

const express = require('express');
const router = express.Router();
// const Deck = require('../../models/Deck');
const authorize = require('../middleware/authorize');
// const Role = require('../miscellany/roles')
const DeckStats = require('../../models/DeckStats');


const studyService = require('../service/studyService');
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
                    path: 'deck_id',
                    populate: {
                        path: 'cards'
                    }
                })
                .then((result) => {
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

function getStudyStats(req, res, next) {
    deckServiceV2.getDeckStats({ deck_id: req.params.id, user_sub: req.user.sub })
        .then(() => {
            studyService.getToStudy({ deck_id: req.params.id, user_sub: req.user.sub })
                .then(result => {
                    res.json(result);
                })
                .catch(next);                           
        })
        .catch(next);
}