const multer = require("multer");

const storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    cb(null, makeFilename(req, file));
  },
});

function makeFilename(req, file) {
  const fileName = `${Date.now()}-${file.originalname}`.replace(/\s/g, "-");
  file.fileName = fileName;
  return fileName;
}

const upload = multer({ storage: storage });

module.exports = { upload };
