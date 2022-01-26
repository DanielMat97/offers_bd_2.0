'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brands_points_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  brands_points_sale.init({
    point_sale_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    is_franchise: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'brands_points_sale',
  });
  return brands_points_sale;
};