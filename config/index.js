require("dotenv").config({
  path: ".env",
});
module.exports = {
  database_config: {
    username: "postgres",
    password: "0000",
    database: "enterprises",
    host: "localhost",
    dialect: "postgres",
    schema: "plink_enterprises",
  },
};
