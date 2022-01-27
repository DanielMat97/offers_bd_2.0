'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enterprises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  enterprises.init({
    nit: DataTypes.STRING,
    is_group_enterprise: DataTypes.BOOLEAN,
    id_group_enterprise: DataTypes.INTEGER,
    description: DataTypes.STRING,
    enterprise_name: DataTypes.STRING,
    trial_count: DataTypes.INTEGER,
    document_type: DataTypes.INTEGER,
    logo_enterprise: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enterprises',
  });
  return enterprises;
};