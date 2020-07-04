// Load config first thing
const dotenv = require('dotenv').config({path: 'config/config.env'});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Getting routes
const decks = require('./routes/api/decks');

const app = express();

// Log if in development
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(bodyParser.json());


// Connect to database
connectDB();

// Tell app to use routes

app.use('/api/decks', decks);

// env var is for deploying to Heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER : Server running in ${process.env.NODE_ENV} on port ${PORT}`));