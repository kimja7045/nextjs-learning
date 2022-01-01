module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // RetweetId
    },
    {
      charset: 'utf8mb4', //이모티콘 쓸려면 mb4를 추가
      collate: 'utf8mb4_general_ci', // 한글 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 좋아요 개수
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // 한 게시글이 여러 게시글을 리트윗 = 대댓글같은 유형, 일대다
  };
  return Post;
};
