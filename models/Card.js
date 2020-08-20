const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    front: {
        type: String
    },
    back: {
        type: String
    },
    last_edited: {
        type: Date,
        default: Date.now,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true
    },
    index: {
        type: Number
    }
});

CardSchema.set('toJSON', {
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret.date_created;
    }
});

module.exports = Card = mongoose.model('Card', CardSchema)