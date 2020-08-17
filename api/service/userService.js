const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const RefreshToken = require('../../models/RefreshToken');
const Role = require('../miscellany/roles')

JWT_TOKEN_LIFESPAN = '20m'
REFRESH_TOKEN_LIFESPAN = '7d'

module.exports = {
    register,
    authenticate,
    refreshToken,
    revokeToken,
    getUserById,
};


async function register({ username, email, password }) {
    const user = await User.findOne({$or: [{email: email},{username: username}]});

    if (!user) {
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            role: Role.User
        });
        
        await newUser.save();

        return {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        }
    } else {
        if (user.username == username) throw  {message: "Username already registered"} ;
        throw  {message: "Email already registered"};
    }
}

async function authenticate({ email, password, ipAddress }) {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw  'Username or password is incorrect';
    }

    const jwtToken = generateJwtToken(user);
    const refreshToken = generateRefreshToken(user, ipAddress);

    await refreshToken.save();

    return {
        id: user._id,
        email: user.email,
        jwtToken: jwtToken,
        refreshToken: refreshToken.token
    }
}

async function refreshToken({ token, ipAddress }) {
    const refreshToken = await getRefreshToken(token);
    const { user } = refreshToken;

    const newRefreshToken = generateRefreshToken(user, ipAddress);
    refreshToken.revoked = Date.now();
    refreshToken.revokedByIp = ipAddress;
    refreshToken.replacedByToken = newRefreshToken.token;
    await refreshToken.save();
    await newRefreshToken.save();

    const jwtToken = generateJwtToken(user);

    return {
        id: user._id,
        email: user.email,
        jwtToken: jwtToken,
        refreshToken: newRefreshToken.token
    } 
}

async function revokeToken({ token, ipAddress }) {
    const refreshToken = await getRefreshToken(token);

    refreshToken.revoked = Date.now();
    refreshToken.revokedByIp = ipAddress;
    await refreshToken.save();
}

// async function getAll() {
//     const users = await db.User.find();
//     return users.map(user => 
//         {
//             id: user._id,
//             email: user.email
//         }
//     );
// }

async function getUserById(id) {
    const user = await getUser(id);
    return {
        id: user._id,
        username: user.username,
        email: user.email
    };
}

async function getUser(id) {
    const user = await User.findById(id);
    if (!user) throw 'User not found';
    return user;
}

async function getRefreshToken(token) {
    const refreshToken = await RefreshToken.findOne({ token }).populate('user');
    if (!refreshToken || !refreshToken.isActive) throw "Invalid token";
    return refreshToken
}

function generateJwtToken(user) {
    return jwt.sign({id: user.id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: JWT_TOKEN_LIFESPAN})
}

function generateRefreshToken(user, ipAddress) {
    // generates a new refresh token schema
    return new RefreshToken({
        user: user.id,
        token: jwt.sign({id: user.id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_LIFESPAN}),
        expires: new Date(Date.now() + 604800000), // expires in a week 
        createdByIp: ipAddress
    });
}