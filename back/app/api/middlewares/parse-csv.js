const fs = require("fs");
const csvParser = require("csv-parser");

const parseCSV = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Process the CSV file and convert its content to an array
  const rows = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (row) => rows.push(row))
    .on("end", () => {
      if (rows.length < 20) {
        // Delete the temporary file created by multer
        fs.unlinkSync(req.file.path);
        return res
          .status(400)
          .json({ error: "CSV file must have at least 20 records" });
      }
      req.rows = rows;
      console.log("rows to be inserted:", rows);
      next();
    });
};

module.exports = parseCSV;
