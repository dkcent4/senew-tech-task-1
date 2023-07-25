const Chance = require("chance");

const chance = new Chance();

// Function to generate a random string of characters;
const generateRandomPeople = () => {
  // minimum people should be 20 and max could be 100
  const [min, max] = [20, 100];
  const numberOfPeople = Math.floor(Math.random() * (max - min + 1)) + min;
  const people = [];
  for (let i = 0; i < numberOfPeople; i++) {
    const name = chance.name(); // Generate realistic name
    const contact = "+92" + chance.phone({ formatted: false }); // Generate +92XXXXXXXXXX format

    people.push({ name, contact });
  }
  return people;
};

module.exports = generateRandomPeople;
