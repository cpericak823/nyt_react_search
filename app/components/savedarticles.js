var React = require("react");
var axios = require("axios");
var helper = require("./utils/helper");

var SaveArticle = React.createClass({
    getInitialState: function () {
        return {
            savedArticles: []
        };
    }, handleDelete: function (event) {
        // console.log(event);
        // event.preventDefault();
        // var delete = this.state
        // this.setState(this.getInitialState());
        // helper.saveArticles(save).then(function (savearticles) {
        //     this.setState({ savearticles: savearticles })
        // }.bind(this));

    },
    render: function () {
        var saveArticleMap = this.props.articles.map(function (article, index) {

            return (

                <div key={index}>
                    <div className="panel panel-default">
                        <div className = "panel-heading">Saved Articles
                            </div>
                        <div className="panel-body">
                            <div> {article.headline.main}</div>
                            <button
                                onClick={this.handleDelete}
                                required
                                id="delete">Delete
                                </button>
                        </div>
                    </div>
                </div>
            )
        }.bind(this));
        return (<div>{saveArticleMap}</div>)
    }
});

module.exports = SaveArticle;
