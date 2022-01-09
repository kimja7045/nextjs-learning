const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        // attributes: ['id', 'nickname', 'email'],
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Post,
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          },
        ],
      });

      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(401).json('로그인이 필요합니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
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
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // attributes: ['id', 'nickname', 'email'],
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Post,
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          },
        ],
      });

      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
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
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send('OK');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
