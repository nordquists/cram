const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20m'})
}

router.post('/register', (req, res) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    status: false,
                    message: "Email already registered"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            status: false,
                            error: err
                        })
                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash
                        })
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    status: true,
                                    message: "User created"
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    status: false,
                                    error: err
                                });
                            })
                    }
                })
            }
        })
});

router.post('/login', (req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    status: false,
                    message: "Auth failed"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        status: false,
                        message: "Auth failed"
                    })
                }
                if (result) {
                    const id = { id: user[0]._id }
                    const accessToken = generateAccessToken(id)
                    const refreshToken = jwt.sign(id, process.env.REFRESH_TOKEN_SECRET)

                    return res.status(200).json({
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        status: true,
                        message: "Auth successful"
                    });
                }
                return res.status(401).json({
                    status: false,
                    message: "Auth failed"
                })
            });

        })
        .catch(err => {
            res.status(500).json({
                status: false,
                error: err
            });
        })
});

// router.post('/token', (req, res) => {
//     const refreshToken = req.body.token
//     if (refreshToken == null) return res.sendStatus(401)
//     if (refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         const accessToken = generateAccessToken({name: user.name})
//         res.json({
//             accessToken: accessToken
//         })
//     })
// })

// TODO: Can only be performed by the user with the id
router.delete('/:id', (req, res) => {
    User.remove({ _id: req.params.id })
        .exec()
        .then(user => {
            user.status(200).json({
               status: true,
               message: 'User deleted'
            });
        })
        .catch(err => {
            res.status(500).json({
               status: false,
               error: err
            });
        })
});

module.exports = router;