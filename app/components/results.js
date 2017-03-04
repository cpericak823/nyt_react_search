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
        helper.getArticles().then(function (body) {
            var articleData = body.data.response.docs;
            this.setState({
                articles: articleData
            })
        }.bind(this));
    },
    render: function () {
        var articleMap = this.state.articles.map(function (article) {

            return (
                <div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <Article name={articleData.headline.main} />
                        </div>
                    </div>
                </div>
            )
        })
    }
})
module.exports = ArticleList;