// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var SearchForm = require('../components/search.js');
// var Results = require('./components/results');
// var Savedarticles = require('./components/savedarticles');


var where = document.getElementById("app");
ReactDOM.render( < div > < SearchForm / > < /div > , where);
