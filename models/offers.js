'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  offers.init({
    brand_id: DataTypes.INTEGER,
    brand_name: DataTypes.STRING,
    brand_logo: DataTypes.ARRAY(DataTypes.STRING),
    identifier: DataTypes.BIGINT,
    created_by_user_id: DataTypes.INTEGER,
    created_by_user_name: DataTypes.STRING,
    type_value: DataTypes.STRING,
    category_ids: DataTypes.ARRAY(DataTypes.INTEGER),
    user_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    country_name: DataTypes.STRING,
    status: DataTypes.STRING,
    scope_value: DataTypes.STRING,
    offer_url: DataTypes.STRING,
    start_date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_date: DataTypes.DATE,
    end_time: DataTypes.DATE,
    day_of_week: DataTypes.ARRAY(DataTypes.INTEGER),
    terms_and_conditions: DataTypes.STRING,
    scope_id: DataTypes.INTEGER,
    bussisnes_id: DataTypes.INTEGER,
    game_rules_id: DataTypes.INTEGER,
    reviewer_email: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'offers'
  });
  return offers;
};