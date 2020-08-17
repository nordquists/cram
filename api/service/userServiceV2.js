const Role = require('../miscellany/roles')
const User = require('../../models/User');

module.exports = {
    checkUser,
    setUsername
};

async function checkUser({ user_id }) {
    const user = await User.findOne({ sub: user_id });
    if(!user) {
        const newUser = new User({
            sub: user_id,
            role: Role.User,
        });
        await newUser.save();

        return {
            new: true
        }
    } else if (!user.onboarded) {
        return {
            new: true
        }
    }
    return {
        new: false
    }
}

async function setUsername({ user_id, username }) {
    const user = await User.findOne({username: username});

    if (!user) {
        const updatedUser = await User.findOne({sub: user_id});
        if (updatedUser.username) throw "Username already defined for user";
        updatedUser.username = username;
        updatedUser.onboarded = true;
        await updatedUser.save();

        return {
            username: username
        }
    } else {
        throw "Username taken";
    }
}