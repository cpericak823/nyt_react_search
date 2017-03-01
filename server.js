// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, 'public/bundle.js')));

//Require external files
require("./routes/routes.js")(app);
var db = require("./controller/connection.js");

// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});
