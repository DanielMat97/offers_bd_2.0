const express = require("express");
const app = express();
const db = require('./models');

app.listen(3000, async () => {
  try {
    await db.sequelize.authenticate();
  } catch (error) {
    console.error(error);
  }
});
