//Require Dependencies
var path = require("path");
var db = require("../controller/connection.js");
var schema = require("../models/schema.js");


module.exports = function(app) {
    app.get("/", function(req, res) {
        schema.find({}).then(function(searchArticles) {
            res.render("index", { index: searchArticles });
        });
    });
};
