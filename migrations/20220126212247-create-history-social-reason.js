'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "history_social_reasons"
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
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'companys',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      nit: {
        type: Sequelize.STRING
      },
      company_name: {
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