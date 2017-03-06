var mongoose = require('mongoose');
var Promise = require("bluebird");
mongoose.Promise = Promise;
var uri = 'mongodb://heroku_xtpppv4x:ulifvkoi1pu4lcepkum4v1maad@ds119750.mlab.com:19750/heroku_xtpppv4x';
//Initialize Mongoose
mongoose.connect(uri);
// Save our mongoose connection to db
var db = mongoose.connection;

// If there's a mongoose error, log it to console
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once we "open" a connection to mongoose, tell the console we're in
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
module.exports = db;
