const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_registered: {
        type: Date,
        default: Date.now,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('User', UserSchema)