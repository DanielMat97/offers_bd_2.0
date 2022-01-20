'use strict';
const { database_config } = require("../config/index");
const table = {
  schema: database_config.schema,
  tableName: "offer_game_rules",
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
      limit_number_redemptions: {
        type: Sequelize.STRING
      },
      register_another_platform: {
        type: Sequelize.STRING
      },
      promotional_code: {
        type: Sequelize.STRING
      },
      minimum_amount: {
        type: Sequelize.STRING
      },
      cumulative_discounts: {
        type: Sequelize.STRING
      },
      excluded_products: {
        type: Sequelize.STRING
      },
      limited_units: {
        type: Sequelize.STRING
      },
      shipping_days_number: {
        type: Sequelize.STRING
      },
      shipping_days_type: {
        type: Sequelize.STRING
      },
      shipping_value_type: {
        type: Sequelize.STRING
      },
      shipping_value: {
        type: Sequelize.STRING
      },
      shipping_operator: {
        type: Sequelize.STRING
      },
      guarantee_number: {
        type: Sequelize.STRING
      },
      guarantee_type: {
        type: Sequelize.STRING
      },
      accepts_returns: {
        type: Sequelize.STRING
      },
      accepts_money_returns: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      cellphone: {
        type: Sequelize.STRING
      },
      whatsapp_number: {
        type: Sequelize.STRING
      },
      formatted_text: {
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