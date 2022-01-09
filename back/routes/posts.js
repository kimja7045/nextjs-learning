const express = require('express');
const { Op } = require('sequelize');

const { Post, User, Comment, Image } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const where = {};
    // const lastId = req.query?.lastId || 0; // 프론트
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      //   where: { id: lastId },
      where,
      limit: 10,
      //   offset: 0, // 1 ~ 10
      // offset: 10 // 11 ~ 20
      //   offset: 100 // 101~110
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ], // 2차원  배열인 이유는 여러 기준으로 정렬할 수 있기 때문, 기본은 'ASC'
      include: [
        {
          model: Image,
        },
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
        {
          model: Post,
          as: 'Retweet',
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
