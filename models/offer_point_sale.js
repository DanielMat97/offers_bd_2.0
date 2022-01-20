'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offer_point_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  offer_point_sale.init({
    point_sale_id: DataTypes.INTEGER,
    offer_pk: DataTypes.INTEGER,
    point_sale_address: DataTypes.STRING,
    city_code: DataTypes.INTEGER,
    city_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'offer_point_sale'
  });
  return offer_point_sale;
};