const Person = require("../models/person.model");

exports.getPeople = async (req, res) => {
  try {
    // Use findAll to get all records from the People table
    const people = await Person.findAll();

    res.status(200).json(people);
  } catch (error) {
    console.error("Error fetching people:", error);
    res.status(500).json({ error: "Error fetching people" });
  }
};

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

exports.createPersons = async (req, res) => {
  try {
    const { rows } = req;

    // Use bulkCreate to insert multiple persons at once
    const createdPersons = await Person.bulkCreate(rows);

    res.status(201).json(createdPersons);
  } catch (error) {
    console.error("Error creating persons:", error);
    res.status(500).json({ error: error.message });
  }
};
