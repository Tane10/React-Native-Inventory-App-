module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("Items", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Items.associate = function(models) {
    // associations can be defined here
  };
  return Items;
};
