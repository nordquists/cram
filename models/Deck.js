const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
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
    piles: {
        type: mongoose.Schema.ObjectId
    },
    is_private: {
        type: Boolean,
        default: true
    },
    cards_num: {
        type: Number,
        required: true,
        default: 0
    },
    cards: [
        {
            front: {
                type: String
            },
            back: {
                type: String
            },
            date_created: {
                type: Date,
                default: Date.now,
                required: true
            }
        }
    ]
});

// TODO, add "tags" or "categories"

module.exports = Deck = mongoose.model('deck', DeckSchema)