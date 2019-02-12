module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      itemDescription: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price:{
        allowNull: true,
        type: Sequelize.DECIMAL
      }

    });
  },
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('TodoItems'),
    
};
