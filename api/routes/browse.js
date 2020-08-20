const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const browseService = require('../service/browseService');
const Role = require('../miscellany/roles')

// our admin browse routes
// router.post('/', authorize([Role.Admin]), createBrowse);
// router.patch('/:id', authorize([Role.Admin]), EditBrowse);
router.get('/', authorize.optional, getBrowse);
router.get('/recent', authorize.required, getRecent);
router.get('/top', authorize.optional, getTop);
router.get('/featured', authorize.optional, getFeatured);
router.get('/study', authorize.required, getStudy);
router.get('/my', authorize.required, getMine);

module.exports = router;

function getStudy(req, res, next) {
    browseService.studyBrowse({ user_id: req.user.sub })
        .then((result) => {
            res.json(result);
        })
        .catch(next);
}

function getBrowse(req, res, next) {
    const sub = req.user ? req.user.sub : null
    // only pass the user id if it exists, route available for unauthenticated users
    browseService.browseDecks({ user_id: sub })
        .then((table) => {
            res.json(table);
        })
        .catch(next)
}

function getRecent(req, res, next) {
    browseService.recentDecks({ user_id: req.user.sub, limit: 16 })
        .then((decks) => {
            res.json(decks);
        })
        .catch(next)

}

function getMine(req, res, next) {
    browseService.myDecks({ user_id: req.user.sub, limit: 16 })
        .then((decks) => {
            res.json(decks);
        })
        .catch(next)

}

function getTop(req, res, next) {
    const sub = req.user ? req.user.sub : null
    browseService.getTopDecks({ user_id: sub })
        .then((decks) => {
            res.json(decks);
        })
        .catch(next)

}

function getFeatured(req, res, next) {
    const sub = req.user ? req.user.sub : null
    browseService.getFeaturedDecks({ user_id: sub })
        .then((decks) => {
            res.json(decks);
        })
        .catch(next)

}