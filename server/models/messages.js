
module.exports = (sequelize, DataTypes) => {
  let messages = sequelize.define('messages', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      
    },
    
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        messages.belongsTo(models.groups, {
          foreignKey: 'userId',
          as: 'groups',
        });
        messages.belongsTo(models.user, {
          foreignKey: 'userId',
          as: 'user',
        });
      },
    },
  });
  return messages;
};