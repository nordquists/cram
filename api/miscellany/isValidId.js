const mongoose = require('mongoose');

module.exports = function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}