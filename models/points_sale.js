'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class points_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  points_sale.init({
    name_points_sale: DataTypes.STRING,
    reference: DataTypes.STRING,
    brand_name: DataTypes.STRING,
    id_enterprise: DataTypes.INTEGER,
    id_location: DataTypes.INTEGER,
    address_description: DataTypes.STRING,
    franchise_amex: DataTypes.STRING,
    franchise_visa: DataTypes.STRING,
    franchise_master: DataTypes.STRING,
    transactions: DataTypes.STRING,
    date_request_acquirement: DataTypes.DATE,
    pricing_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    logo_pdv: DataTypes.STRING,
    date_force_plan: DataTypes.DATE,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'points_sale',
  });
  return points_sale;
};