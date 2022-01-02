const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // 쿠키랑 묶어줌, 서버에러, 성공 유무
  });

  passport.deserializeUser(async (id, done) => {
    // 한번 로그인한 이후
    try {
      const user = await User.findOne({
        where: { id },
      });
      done(null, user); // user -> req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
