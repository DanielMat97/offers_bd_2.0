'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "payment_methods"
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
      pos_id: {
        type: Sequelize.INTEGER
      },
      point_sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'points_sales',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      phone: {
        type: Sequelize.STRING
      },
      afiliation_date: {
        type: Sequelize.DATE
      },
      desafiliation_date: {
        type: Sequelize.DATE
      },
      mcc_code: {
        type: Sequelize.STRING
      },
      transactions: {
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