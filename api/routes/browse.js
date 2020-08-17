const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const browseService = require('../service/browseService');
const Role = require('../miscellany/roles')

// our admin browse routes
// router.post('/', authorize([Role.Admin]), createBrowse);
// router.patch('/:id', authorize([Role.Admin]), EditBrowse);
router.get('/', authorize.optional, getBrowse);

module.exports = router;


function getBrowse(req, res, next) {
    // only pass the user id if it exists, route available for unauthenticated users
    browseService.browseDecks({ user_id: req.user ? req.user.id : null})
        .then((table) => {
            res.json(table);
        })
        .catch(next)
}