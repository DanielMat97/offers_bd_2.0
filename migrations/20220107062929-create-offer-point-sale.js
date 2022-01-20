'use strict';
const { database_config } = require("../config/index");
const table = {
  schema: database_config.schema,
  tableName: "offer_point_sales",
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
      point_sale_id: {
        type: Sequelize.INTEGER
      },
      offer_pk: {
        type: Sequelize.INTEGER
      },
      point_sale_address: {
        type: Sequelize.STRING
      },
      city_code: {
        type: Sequelize.INTEGER
      },
      city_description: {
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