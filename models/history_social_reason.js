'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class history_social_reason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  history_social_reason.init({
    company_id: DataTypes.INTEGER,
    nit: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'history_social_reason',
  });
  return history_social_reason;
};