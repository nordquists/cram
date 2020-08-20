const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    categories: [{
        type: String
    }],
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
    creator_sub: {
        type: String,
        required: true
    },
    piles: {
        type: mongoose.Schema.ObjectId
    },
    is_private: {
        type: Boolean,
        default: true
    },
    last_edited: {
        type: Date,
        default: Date.now()
    },
    featured: {
        type: Boolean,
        default: false,
    },
    users: {
        type: Number,
        default: 1
    },
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card',
        }
    ],
});

DeckSchema.pre('update', function(next) {
    var deck = this;

    deck.last_edited = Date.now()
});

module.exports = Deck = mongoose.model('Deck', DeckSchema)