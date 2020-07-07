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
    owner: {
        type: [{ type: Schema.Types.ObjectId, ref: 'User'}],
        default: Date.now,
        required: true
    },
    private: {
        type: Boolean,
        default: true
    }
});

module.exports = Pile = mongoose.model('Pile', PileSchema)