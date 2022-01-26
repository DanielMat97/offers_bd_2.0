'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "brands_points_sales"
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
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'brands',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      is_franchise: {
        type: Sequelize.BOOLEAN
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