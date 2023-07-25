const express = require("express");
const router = express.Router();
const personController = require("../controllers/person.controller");
// multer middleware to upload csv file
const upload = require("../../utils/upload-csv");
// to parse csv files
const parseCSV = require("../middlewares/parse-csv");

router.get("/get-people", personController.getPeople);
router.get("/insert-random-people", personController.createPeopleByRandom);
router.post("/single", personController.createPerson);
router.post(
  "/multi",
  upload.single("csvFile"),
  parseCSV,
  personController.createPeopleByFile
);

module.exports = router;
