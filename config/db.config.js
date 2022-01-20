const { database_config } = require("./index");
module.exports = {
  "development": {
    username: database_config.username,
    password: database_config.password,
    database: database_config.database,
    host: database_config.host,
    dialect: database_config.dialect,
    schema: database_config.schema
  },
};
