
module.exports = (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
     }, 
    group_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: (models) => {
        messages.belongsTo(models.user, {
          foreignKey: 'user_id',
      
        });
        messages.belongsTo(models.group, {
          foriegnKey: 'group_id',
        });
      }
    }
  });
  return messages;
};