// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var SearchForm = require('../components/search');

// var Savedarticles = require('./components/savedarticles');


var where = document.getElementById("app");
ReactDOM.render(<div> < SearchForm /> </div> , where);
