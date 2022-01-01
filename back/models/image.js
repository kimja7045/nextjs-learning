module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8', //이모티콘 쓸려면 mb4를 추가
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
