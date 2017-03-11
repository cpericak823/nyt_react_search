var React = require("react");
var axios = require("axios");
var helper = require("./utils/helper")


var Article = React.createClass({
    getInitialState: function () {
        return {
            article: []
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
   
        helper.saveArticle({
            articlename: this.props.articlename,
            id: this.props.id,
            date: this.props.date
        }).then(function (savearticles) {
            this.setState({ savearticles: savearticles })
        }.bind(this));

    },
    render: function () {

        return (

            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-3 col-md-9">
                                <div> {this.props.articlename}</div>
                                <button type="submit"
                                    onClick={this.handleSubmit}
                                    required
                                    id="save">Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Article;