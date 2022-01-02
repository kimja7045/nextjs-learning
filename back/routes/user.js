const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
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
        .send({ msg: '이미 사용중인 아이디입니다.', status: 403, ok: false });
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
