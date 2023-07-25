const Person = require("../models/person.model");
const generateRandomPeople = require("../../helpers/generateRandomPeople");

exports.getPeople = async (req, res) => {
  try {
    // Use findAll to get all records from the People table
    const people = await Person.findAll();
    res.status(200).json(people);
  } catch (error) {
    console.error("Error fetching people:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.createPeopleByRandom = async (req, res) => {
  try {
    const people = generateRandomPeople();
    // Use bulkCreate to insert multiple people at once
    const createdPeople = await Person.bulkCreate(people);
    res.status(201).json(createdPeople);
  } catch (error) {
    console.error("Error generating random people:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.createPerson = async (req, res) => {
  try {
    // Create a new person record
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.createPeopleByFile = async (req, res) => {
  try {
    const { rows } = req;

    // Use bulkCreate to insert multiple persons at once
    const people = await Person.bulkCreate(rows);

    res.status(201).json(people);
  } catch (error) {
    console.error("Error creating persons:", error);
    res.status(500).json({ error: error.message });
  }
};
