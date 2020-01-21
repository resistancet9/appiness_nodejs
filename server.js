const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");
const bodyParser = require('body-parser');

// db setup
mongoose
  .connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(conn => {
    console.log("Connected to MongoLab");
  })
  .catch(err => {
    console.log(err.message);
  });

// app setup
app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// routes
router(app);

// listen
app.listen(3030, () => {
  console.log("Running on http://localhost:3030");
});
