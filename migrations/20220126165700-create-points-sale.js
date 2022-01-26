'use strict';
const {database_config} =require("../config")
const table = { 
  schema: database_config.schema,
  tableName: "points_sales"
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
      name_points_sale: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      brand_name: {
        type: Sequelize.STRING
      },
      id_company: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'companys',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      id_location: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'locations',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      address_description: {
        type: Sequelize.STRING
      },
      franchise_amex: {
        type: Sequelize.STRING
      },
      franchise_visa: {
        type: Sequelize.STRING
      },
      franchise_master: {
        type: Sequelize.STRING
      },
      transactions: {
        type: Sequelize.STRING
      },
      date_request_acquirement: {
        type: Sequelize.DATE
      },
      pricing_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'pricings',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'cities',
            schema: database_config.schema
          },
          key: 'id'
        }
      },
      logo_pdv: {
        type: Sequelize.STRING
      },
      date_force_plan: {
        type: Sequelize.DATE
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categories',
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