const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
  // express의 미들웨어 확장 기법
  passport.authenticate('local', (err, user, clientError) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (clientError) {
      return res.status(401).send(clientError.reason); // 401, 허가되지않음
    }
    return req.login(user, async (loginErr) => {
      // passport 로그인
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post('/', async (req, res, next) => {
  // POST /user
  try {
    const { email, nickname, password } = req.body;

    const exUser = await User.findOne({
      where: {
        email,
      },
    });
    if (exUser) {
      return res
        .status(403)
        .send({ msg: '이미 사용중인 아이디입니다.', status: 403, ok: false }); // 403, 금지, 허용되지않은 요청
    }

    const hashedPassword = await bcrypt.hash(password, 12); // 10 ~ 13자리

    const user = await User.create({
      email,
      nickname,
      password: hashedPassword,
    });
    // res.json();
    // res.setHeader('Access-Control-Allow-Origin': 'http://localhost:3060')
    res.status(201).send({ msg: 'OK', status: 201, ok: true, data: user });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;
