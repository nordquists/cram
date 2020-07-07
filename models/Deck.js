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
    },
    creator: {
        type: [{ type: Schema.Types.ObjectId, ref: 'User'}],
        required: true
    },
    piles: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Pile'}],
    },
    private: {
        type: Boolean,
        default: true
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