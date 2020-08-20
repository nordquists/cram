const mongoose = require('mongoose');
const Schema = mongoose.Schema;

DEFAULT_DIFFICULTY = 1.3;

const DeckStatsSchema = new Schema({
    cards: [
        {
            _card: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Card',
            },
            model: [
                {
                    type: Number,
                    default: null
                }
            ],
            days_between_review: {
                type: Number,
                default: null
            },
            times_studied: {
                type: Number,
                default: 0
            },
            last_studied: {
                type: Date,
                default: null
            },
            difficulty: {
                type: Number,
                default: DEFAULT_DIFFICULTY
            }
        }
    ],
    due: {
        type: Date,
        default: null
    },
    avg_difficulty: {
        type: Number,
        default: DEFAULT_DIFFICULTY
    },
    percentages: {
        red: {
            type: Number,
            default: 0.0
        },
        orange: {
            type: Number,
            default: 0.0
        }, 
        green: {
            type: Number,
            default: 0.0
        }
    },
    times_studied: {
        type: Number,
        default: 0
    },
    last_studied: {
        type: Date,
        default: null
    },
    deck_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deck',
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    user_sub: {
        type: String,
        required: true,
    },
    last_updated: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = DeckStats = mongoose.model('DeckStats', DeckStatsSchema)