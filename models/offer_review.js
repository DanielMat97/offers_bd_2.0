'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offer_review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  offer_review.init({
    observations: DataTypes.ARRAY(DataTypes.STRING),
    user: DataTypes.STRING,
    new_sate_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    review_section_id: DataTypes.INTEGER,
    offer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'offer_review'
  });
  return offer_review;
};