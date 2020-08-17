const express = require('express');
const router = express.Router();
const Joi = require("joi");
const authorize = require('../middleware/authorize');
const userService = require('../service/userServiceV2');
const validateRequestSchema = require('../middleware/validateRequestSchema');

router.get('/check-login', authorize.required, checkUser);
router.post('/username', authorize.required, setUsernameSchema, setUsername);


module.exports = router;

function checkUser(req, res, next) {
    userService.checkUser({user_id: req.user.sub})
        .then((result) => {
            res.json(result);
        })
        .catch(next);
}

function setUsernameSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
    });
    validateRequestSchema(req, next, schema);
}

function setUsername(req, res, next) {
    userService.setUsername({user_id: req.user.sub, username: req.body.username})
        .then((result) => {
            res.json(result);
        })
        .catch(next);
}