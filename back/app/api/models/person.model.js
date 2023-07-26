const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db");
const { v4 } = require("uuid");

const Person = sequelize.define("Person", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define a 'beforeCreate' hook to generate UUID for each new person
Person.beforeCreate((person) => {
  person.id = v4(); // Generate a new unique UUID for each person
});

module.exports = Person;
