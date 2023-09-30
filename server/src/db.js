require("dotenv").config();

const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;
console.log(DB_PASSWORD)
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

sequelize.authenticate().then(() => {
  console.log("Connected database");
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
