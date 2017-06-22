
module.exports = (sequelize, DataTypes) => {
  const groupuser = sequelize.define('groupuser', {
    user_id: {
      type: DataTypes.INTEGER,
  },
  group_id: {
    type: DataTypes.INTEGER,
  },
  }, { 
    classMethods: {
      associate: (models) => {
        groupuser.hasMany(models.user, {
          foreignKey: 'user_id',
        });
      },
    },
  });
  return groupuser;
};