var React = require("react");
var axios = require("axios");
var helper = require("./utils/helper");
var Article = require("./article");



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
    handleSubmit: function (article) {
        event.preventDefault();
        var save = this.state
    },
    render: function () {
        var articleMap = this.props.articles.map(function (article, index) {

            return (

                <div key={index}>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-3 col-md-9">
                                    <Article 
                                        articlename={article.headline.main}
                                        id={article._id}
                                        date={article.pub_date}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }.bind(this));
        return (<div>{articleMap}</div>)
    }
})
module.exports = ArticleList;