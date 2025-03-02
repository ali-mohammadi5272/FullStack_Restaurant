const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "fullstack_restaurant",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
