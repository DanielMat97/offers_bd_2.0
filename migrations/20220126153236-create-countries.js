'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "countries"
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
      country_iso_3: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      country_iso_2: {
        type: Sequelize.STRING
      },
      country_code: {
        type: Sequelize.STRING
      },
      active: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(table);
  }
};