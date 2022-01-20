'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offer_settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  offer_settings.init({
    country: DataTypes.STRING,
    active: DataTypes.STRING,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    prefix: DataTypes.STRING,
    suffix: DataTypes.STRING,
    side_text: DataTypes.STRING,
    placeholder: DataTypes.STRING,
    icon: DataTypes.STRING,
    input_properties: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'offer_settings'
  });
  return offer_settings;
};