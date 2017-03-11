var React = require("react");
var helper = require("./utils/helper");
var ArticleList = require("./articlelist");
var SavedArticles = require("./savedarticles");

var SearchForm = React.createClass({
    //initalize state
    getInitialState: function () {
        return {
            topic: "",
            startYear: "",
            endYear: "",
            articles: [],
            SavedArticles: []
        };
    },
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState)
    },
    handleSubmit: function (event) {
        event.preventDefault();
        var state = this.state
        this.setState(this.getInitialState());
        helper.getArticles(state).then(function (articles) {
            this.setState({ articles: articles })
        }.bind(this));

    },
    render: function () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Search Articles
                            </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-xs-3 col-md-3">
                                    <label>
                                        Search Parameter:
                                            <input type="text"
                                            value={this.state.topic}
                                            onChange={this.handleChange}
                                            required
                                            id="topic" />
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3 col-md-3">
                                    <label>
                                        Start Date (YYYYMMDD):

                                            <input type="text"
                                            value={this.state.startYear}
                                            onChange={this.handleChange}
                                            id="startYear" />

                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3 col-md-3">
                                    <label>
                                        End Year (YYYYMMDD):

                                            <input type="text"
                                            value={this.state.endYear}
                                            onChange={this.handleChange}
                                            id="endYear" />

                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3 col-md-3">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ArticleList articles={this.state.articles}></ArticleList>
                <SavedArticles articles={this.state.articles}></SavedArticles>
            </div>
        )
    }

});

module.exports = SearchForm;
