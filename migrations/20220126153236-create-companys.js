'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "companys"
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
      nit: {
        type: Sequelize.STRING
      },
      is_group_company: {
        type: Sequelize.BOOLEAN
      },
      id_group_company: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      trial_count: {
        type: Sequelize.INTEGER
      },
      document_type: {
        type: Sequelize.INTEGER
      },
      logo_enterprise: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'countries',
            schema: database_config.schema
          },
          key: 'id'
        }
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