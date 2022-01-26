'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  countries.init({
    country_iso_3: DataTypes.STRING,
    description: DataTypes.STRING,
    country_iso_2: DataTypes.STRING,
    country_code: DataTypes.STRING,
    active: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'countries',
  });
  return countries;
};