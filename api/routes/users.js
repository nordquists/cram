const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/User');

router.post('/signup', (req, res) => {
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
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
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
                    return res.status(200).json({
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