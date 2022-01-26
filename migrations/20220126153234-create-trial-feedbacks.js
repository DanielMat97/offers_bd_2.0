'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "trial_feedbacks"
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      trial_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'trials',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      comments: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(table);
  }
};