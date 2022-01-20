'use strict';
const { database_config } = require("../config/index");
const table = {
  schema: database_config.schema,
  tableName: "offer_reviews",
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      observations: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      new_sate_id: {
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.DATE
      },
      review_section_id: {
        type: Sequelize.INTEGER
      },
      offer_id: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table);
  }
};