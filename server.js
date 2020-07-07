// Load config first thing
const dotenv = require('dotenv').config({path: 'config/config.env'});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Getting api
const decks = require('./api/routes/decks');

const app = express();

// Log if in development
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(bodyParser.json());


// Connect to database
connectDB();

// Tell app to use api
app.use('/api/decks', decks);

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