const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// const secret = jwksRsa.expressJwtSecret({
//   cache: true,
//   rateLimit: true,
//   jwksRequestsPerMinute: 5,
//   jwksUri: `${authConfig.issuer}.well-known/jwks.json`,
// });

const authConfig = {
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`,
     }),
    issuer: process.env.AUTH0_ISSUER,
    audience: process.env.AUTH0_AUDIENCE,
    algorithms: ['RS256'],
  };

// const authorize = jwt({ secret, ...authConfig });

// module.exports = function(req, res, next) {
//   return jwt(authConfig)(req, res, next);
// }

module.exports = {
  required: (req, res, next) => {
    return jwt(authConfig)(req, res, next);
  },
  optional: (req, res, next) => {
    return jwt({...authConfig, credentialsRequired: false})(req, res, next);
  }
}


// const jwt = require('express-jwt');
// const User = require('../../models/User');
// const RefreshToken = require('../../models/RefreshToken');

// module.exports = function authorize(roles = []) {
//     // roles should only be received as an array
//     const secret = process.env.ACCESS_TOKEN_SECRET;
//     return [
//         jwt({ secret, algorithms: ['HS256'] }), // is the user logged in?
//         async (req, res, next) => {
//             // does user have the correct permissions to access this route?
//             const user = await User.findById(req.user.id);

//             if (!user || (roles.length && !roles.includes(userDb.roles))) {
//                 return res.status(401).json({ message: "Unauthorized" });
//             }

//             const refreshTokens = await RefreshToken.find({ user: user.id });
//             req.user.ownsToken = token => !!refreshTokens.find(x => x.token === token);
//             req.user.role = user.role;
//             next();
//         }

//     ];
// }
