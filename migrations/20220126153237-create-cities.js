'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "cities"
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
      description: {
        type: Sequelize.STRING
      },
      city_code: {
        type: Sequelize.INTEGER
      },
      state_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'states',
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