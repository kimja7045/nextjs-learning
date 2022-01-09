const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'Post',
        tableName: 'posts',
        charset: 'utf8mb4', //이모티콘 쓸려면 mb4를 추가
        collate: 'utf8mb4_general_ci', // 한글 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 좋아요 개수, post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // 한 게시글이 여러 게시글을 리트윗 = 대댓글같은 유형, 일대다, post.addRetweet
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const Post = sequelize.define(
//     'Post',
//     {
//       content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       // RetweetId
//     },
//     {
//       charset: 'utf8mb4', //이모티콘 쓸려면 mb4를 추가
//       collate: 'utf8mb4_general_ci', // 한글 저장
//     }
//   );
//   Post.associate = (db) => {
//     db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
//     db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
//     db.Post.hasMany(db.Comment); // post.addComments, post.getComments
//     db.Post.hasMany(db.Image); // post.addImages, post.getImages
//     db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 좋아요 개수, post.addLikers, post.removeLikers
//     db.Post.belongsTo(db.Post, { as: 'Retweet' }); // 한 게시글이 여러 게시글을 리트윗 = 대댓글같은 유형, 일대다, post.addRetweet
//   };
//   return Post;
// };
