//Require Dependencies
var path = require("path");
var db = require("../controller/connection.js");
var schema = require("../models/schema.js");

module.exports = function(app) {
    //update the schema to save the article
    app.put("/", function(req, res) {
          schema.findByIdAndUpdate(id, { $set: { saved: false } }, { new: true }.then(function(savedarticles) {
            res.sendFile("../public/assets/index.html");
            console.log(schema);
        }).catch(function(err) {
            console.log(err);
        }));
    });
};
