// Load config first thing
import sslRedirect from 'heroku-ssl-redirect';
const dotenv = require('dotenv').config({path: 'config/config.env'});
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('./api/middleware/errorHandler');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

// Log if in development
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// activate cors
app.use(sslRedirect());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors());

// Connect to database
connectDB();

// Tell app to use api
app.use('/api/decks', require('./api/routes/decks'));
app.use('/api/browse', require('./api/routes/browse'));
app.use('/api/users', require('./api/routes/usersV2'));

app.use(errorHandler); 

app.set('port', process.env.PORT || 5000);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app;