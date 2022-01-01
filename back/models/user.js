module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // id가 기본적으로 들어있음.
      email: {
        type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, // 필수
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 좋아요 개수
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Followers',
      foreignKey: 'FollowingId',
    }); // 좋아요 개수
    db.User.belongsToMany(db.User, {
      through: 'Follow', // 테이블 이름을 변경
      as: 'Followings',
      foreignKey: 'FollowerId', // 컬럼명을 변경
    }); // 좋아요 개수
  };
  return User;
};
