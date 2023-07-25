const express = require("express");
const app = express();
const sequelize = require("./utils/db");
const personRoutes = require("./api/routes/person.routes");

// Synchronize the models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });

// use middlewares
app.use(express.json()); // to parse request body
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded form data

// use route middlewares
app.use("/api/person", personRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log("Listening on port:", PORT));
