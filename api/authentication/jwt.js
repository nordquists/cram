const passport = require('passport');
const passportJwt = require('passport-jwt');

const jwtOptions = {
    // Get the JWT from the "Authorization" header.
    // By default this looks for a "JWT " prefix
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
    // The secret that was used to sign the JWT
    secretOrKey: process.env.AUTHENTICATION_TOKEN_SECRET,
    // The issuer stored in the JWT
    issuer: process.env.AUTHENTICATION_TOKEN_ISSUER,
    // The audience stored in the JWT
    audience: process.env.AUTHENTICATION_TOKEN_AUDIENCE
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
    const user = users.getUserById(parseInt(payload.sub));
    if (user) {
        return done(null, user, payload);
    }
    return done();
}));