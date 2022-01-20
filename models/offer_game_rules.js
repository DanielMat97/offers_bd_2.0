'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offer_game_rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  offer_game_rules.init({
    limit_number_redemptions: DataTypes.STRING,
    register_another_platform: DataTypes.STRING,
    promotional_code: DataTypes.STRING,
    minimum_amount: DataTypes.STRING,
    cumulative_discounts: DataTypes.STRING,
    excluded_products: DataTypes.STRING,
    limited_units: DataTypes.STRING,
    shipping_days_type: DataTypes.STRING,
    shipping_value_type: DataTypes.STRING,
    shipping_value: DataTypes.STRING,
    shipping_operator: DataTypes.STRING,
    guarantee_number: DataTypes.STRING,
    guarantee_type: DataTypes.STRING,
    accepts_returns: DataTypes.STRING,
    accepts_money_returns: DataTypes.STRING,
    phone: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    whatsapp_number: DataTypes.STRING,
    formatted_text: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'offer_game_rules'
  });
  return offer_game_rules;
};