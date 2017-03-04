var React = require("react");
var axios = require("axios");
var helper = require("./utils/helper")


var ArticleList = React.createClass({
    getInitialState: function () {
        return {
            articles: []
        };
    },
    componentDidMount: function () {
        // helper.getArticles().then(function (body) {
        //     var articleData = body.data.response.docs;
        //     console.log(articleData);
        //     this.setState({
        //         articles: articleData
        //     })
        // }.bind(this));
    },
    render: function () {
        var articleMap = this.props.articles.map(function (article, index) {

            return (
                
                <div key={index}>
                    <div className="panel panel-default">
                        <div className="panel-body">
                         <div> {article.headline.main}</div>
                         <input type="submit" value="Save" />
                        </div>
                    </div>
                </div>
            )
        });
        return (<div>{articleMap}</div>)
    }
})
module.exports = ArticleList;