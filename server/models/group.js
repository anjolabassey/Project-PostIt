
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    
  }, {
    classMethods: {
      associate: (models) => {
        group.hasMany(models.messages, {
          foreignKey: 'group_id',
          onDelete: 'CASCADE',

        });
      },
    },
  });
  return group;
};