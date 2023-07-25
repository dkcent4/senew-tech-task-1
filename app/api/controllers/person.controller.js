const Person = require("../models/person.model");

exports.createPerson = async (req, res) => {
  try {
    const { name, contact } = req.body;

    // Create a new person record
    const newPerson = await Person.create({ name, contact });
    res.status(201).json(newPerson);
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ error: error.message });
  }
};
