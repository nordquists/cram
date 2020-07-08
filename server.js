// Load config first thing
const dotenv = require('dotenv').config({path: 'config/config.env'});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const connectDB = require('./config/db');

// Getting api
const decks = require('./api/routes/decks');
const users = require('./api/routes/users');

const app = express();

// Log if in development
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// set up passport middleware
app.use(passport.initialize());

app.use(bodyParser.json());

// // Allow CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     if (req === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({}); // just if the browser asks what options are allowed
//     }
// })


// Connect to database
connectDB();

// Tell app to use api
app.use('/api/decks', decks);
app.use('/api/users', users);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// env var is for deploying to Heroku
const PORT = process.env.PORT || 5000;

// starting server
app.listen(PORT, () => console.log(`SERVER : Server running in ${process.env.NODE_ENV} on port ${PORT}`));