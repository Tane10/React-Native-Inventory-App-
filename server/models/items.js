module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Items.associate = (models) => {
    // associations can be defined here
  };
  return Items;
};
