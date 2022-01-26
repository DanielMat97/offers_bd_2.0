'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pricings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pricings.init({
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    disposition: DataTypes.INTEGER,
    free: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pricings',
  });
  return pricings;
};