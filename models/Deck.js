const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = Deck = mongoose.model('deck', DeckSchema)