require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./utils/db");
const personRoutes = require("./api/routes/person.routes");

// use middlewares
app.use(cors());
app.use(express.json()); // to parse request body
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded form data

// Synchronize the models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });

// use route middlewares
app.use("/api/person", personRoutes);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log("Listening on port:", PORT));
