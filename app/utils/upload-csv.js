const path = require("path");
const multer = require("multer");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = file.fieldname + "-" + Date.now();
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

// Multer file filter to allow only CSV files
const fileFilter = (req, file, cb) => {
  const filetypes = /csv/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Only CSV files are allowed");
  }
};

// Multer middleware with storage and file filter
const upload = multer({ storage, fileFilter });

module.exports = upload;
