'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companys.init({
    nit: DataTypes.STRING,
    is_group_company: DataTypes.BOOLEAN,
    id_group_company: DataTypes.INTEGER,
    description: DataTypes.STRING,
    company_name: DataTypes.STRING,
    trial_count: DataTypes.INTEGER,
    document_type: DataTypes.INTEGER,
    logo_enterprise: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'companys',
  });
  return companys;
};