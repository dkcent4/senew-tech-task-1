const express = require("express");
const multer = require("multer");
const uploadController = require("../controllers/upload.controller.js");

const router = express.Router();
const upload = multer({ dest: "app/uploads/" });

router.post("/", upload.single("csvFile"), uploadController.uploadFile);

module.exports = router;
