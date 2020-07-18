const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true
    },
    creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    is_private: {
        type: Boolean,
        default: true
    },
    decks: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Deck'
        }
    ]
});

module.exports = Pile = mongoose.model('Pile', PileSchema)