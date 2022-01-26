'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_methods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_methods.init({
    pos_id: DataTypes.INTEGER,
    point_sale_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    afiliation_date: DataTypes.DATE,
    desafiliation_date: DataTypes.DATE,
    mcc_code: DataTypes.STRING,
    transactions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_methods',
  });
  return payment_methods;
};