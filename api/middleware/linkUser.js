const User = require('../../models/User');
const Role = require('../miscellany/roles')

module.exports = async function(req, res, next) {
    const user = await User.findOne({ sub: req.user.sub });
    
     if(!user) {
          const newUser = new User({
               sub: req.user.sub,
               role: Role.User
          });
          await newUser.save();
          req.user.role = newUser.role;
   } else {
        req.user.role = user.role;
   }
   next();
}