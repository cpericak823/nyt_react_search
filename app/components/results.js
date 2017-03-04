var React = require("react");
var axios = require("axios");
var helpers = require("./utils/helper")

var ArticleList = React.createClass
getInitialState: function () {
    return {
        articles: []
    };
}
componentDidMount: function () {
    helper.getArticles().then(function (response) {
        var articleData = response.data;
        this.setState({
            articles: articleData
        })
    }.bind(this));
},
render: function () {
    var articleMap = this.state.articles.map(function (student) {
        return (<Article name={article.name}/> )
    })
}
