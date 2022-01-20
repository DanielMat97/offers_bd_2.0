require("dotenv").config({
  path: ".env",
});
module.exports = {
  database_config: {
    username: "postgres",
    password: "1797",
    database: "offers_db",
    host: "localhost",
    dialect: "postgres",
    schema: "plink_offers",
  },
};
