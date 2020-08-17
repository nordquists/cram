const express = require('express');
const router = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const authorize = require('../middleware/authorize');
const validateRequestSchema = require('../middleware/validateRequestSchema');
const userService = require('../service/userService');
const Role = require('../miscellany/roles')
const User = require('../../models/User');

// our user routes
router.post('/register', registerSchema, register);
router.post('/login', authenticateSchema, authenticate);
router.post('/refresh-token', refreshToken);
router.post('/revoke-token', authorize, revokeTokenSchema, revokeToken);
// router.get('/', authorize([Role.Admin]), getAllUsers);
router.get('/:id', authorize, getUserById);
// router.get('/:id/refresh-tokens', authorize(), getRefreshTokens);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequestSchema(req, next, schema);
}

function register(req, res, next) {
    const { username, email, password } = req.body;
    userService.register({ username, email, password })
        .then(({ ...user }) => {
            res.json(user)
        }) 
        .catch(next);
}

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequestSchema(req, next, schema);
}

function authenticate(req, res, next) {
    const { email, password } = req.body;
    const ipAddress = req.ip;
    userService.authenticate({ email, password, ipAddress })
        .then(({ refreshToken, ...user }) => {
            setTokenCookie(res, refreshToken);
            res.json(user)
        })
        .catch(next);
}

function refreshToken(req, res, next) {
    const token = req.cookies.refreshToken;
    const ipAddress = req.ip;
    userService.refreshToken({ token, ipAddress })
        .then(({ ...user }) => {
            // refreshToken, 
            // setTokenCookie(res, refreshToken);
            res.json(user);
        })
        .catch(next);
}

function revokeTokenSchema(req, res, next) {
    const schema = Joi.object({
        token: Joi.string().empty('')
    });
    validateRequestSchema(req, next, schema);
}

function revokeToken(req, res, next) {
    const token = req.body.token || req.cookies.refreshToken;
    const ipAddress = req.ip;

    if (!token) return res.status(400).json({ message: 'Must provide token to revoke' }); 

    if (!req.user.ownsToken(token) && req.user.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    userService.revokeToken({ token, ipAddress })
        .then(() => res.json({ message: 'Token revoked' }))
        .catch(next);
}

// function getAll(req, res, next) {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(next);
// }

function getUserById(req, res, next) {
    // regular users can get their own record and admins can get any record
    if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    userService.getUserById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(next);
}

function setTokenCookie(res, token) {
    // create http only cookie with refresh token that expires in 7 days
    var oneWeek = 7 * 24 * 3600 * 1000;
    const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + oneWeek),
        maxAge: oneWeek
    };
    res.cookie('refreshToken', token, cookieOptions);
}