// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var SearchForm = require('../components/search');
// var ReactRoutes = require("../react_routes/react_router");

var where = document.getElementById("app");
ReactDOM.render(<div> < SearchForm /> </div> , where);
