const express = require('express');
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
const app = express();

const static = express.static;
app.use(static('./public/'));
app.use(static('./uploads/'));

app.post('/picture', upload.single('imagefile'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send(req.file.originalname);
})

app.listen(3000);
