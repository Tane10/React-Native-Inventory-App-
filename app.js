const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Setup the express app
const app = express();

// Log requests to console
app.use(logger("dev"));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch all route th`t send bach a welcome messgae in JOSN formate

require('./server/routes')(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the begining of nothingness."
  })
);

module.exports = app;
