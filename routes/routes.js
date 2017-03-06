//Require Dependencies
var path = require("path");
var db = require("../controller/connection.js");
var schema = require("../models/schema.js");

module.exports = function(app) {
    //update the schema to save the article
    app.post("/", function(req, res) {
        console.log(req.body);
          schema.find({}).then(function(savedarticles) {
            res.sendFile(path.join(__dirname + "/../public/assets/index.html"));
        }).catch(function(err) {
            console.log(err);
        });
    });
};
