'use strict';
const { database_config } = require("../config/index");
const table = {
  schema: database_config.schema,
  tableName: "offer_settings",
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
      country: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      prefix: {
        type: Sequelize.STRING
      },
      suffix: {
        type: Sequelize.STRING
      },
      side_text: {
        type: Sequelize.STRING
      },
      placeholder: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      input_properties: {
        type: Sequelize.STRING
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