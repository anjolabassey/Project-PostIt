
module.exports = (sequelize, DataTypes) => {
  let groups = sequelize.define('groups', {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messages: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        groups.hasMany(models.users, {
          foreignKey: 'userId',
          as: 'user',
        });
        groups.hasMany(models.messages, {
          foreignKey: 'userId',
          as: 'messages',
        });
      },
    },
  });
  return groups;
};