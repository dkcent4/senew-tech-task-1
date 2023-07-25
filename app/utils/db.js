// db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("senew", "root", "pass123", {
  host: "localhost",
  dialect: "mysql",
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

module.exports = sequelize;
