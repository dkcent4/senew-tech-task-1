const fs = require("fs");
const csvParser = require("csv-parser");

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Process the CSV file and convert its content to an array
  const rows = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (row) => rows.push(row))
    .on("end", () => {
      res.json({ data: rows });
    });
};
