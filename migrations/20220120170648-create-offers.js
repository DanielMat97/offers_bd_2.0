'use strict';
const { database_config } = require("../config/index");
const table = {
  schema: database_config.schema,
  tableName: "offers",
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
      brand_id: {
        type: Sequelize.INTEGER
      },
      brand_name: {
        type: Sequelize.STRING
      },
      brand_logo: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      identifier: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_by_user_id: {
        type: Sequelize.INTEGER
      },
      created_by_user_name: {
        type: Sequelize.STRING
      },
      type_value: {
        type: Sequelize.STRING
      },
      category_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      country_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      scope_value: {
        type: Sequelize.STRING
      },
      offer_url: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      day_of_week: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      terms_and_conditions: {
        type: Sequelize.STRING
      },
      scope_id: {
        type: Sequelize.INTEGER
      },
      bussisnes_id: {
        type: Sequelize.INTEGER
      },
      game_rules_id: {
        type: Sequelize.INTEGER
      },
      reviewer_email: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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