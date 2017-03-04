var React = require("react");
var helper = require("./utils/helper");
var ArticleList = require("./articlelist");
var SaveArticles = require("./savedarticles");

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
        // helper.saveArticles(state).then(function(savearticles){
        //     this.setState({savearticles: savearticles})
        // }.bind(this));
    },
    render: function () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <label>
                                    Topic:

                                    <div className="col-md-12">
                                        <input type="text"
                                            value={this.state.topic}
                                            onChange={this.handleChange}
                                            required
                                            id="topic" />
                                    </div>

                                </label>
                            </div>
                            <div className="row">

                                <label>
                                    Start Date (YYYYMMDD):
                                        <div className="col-md-12">
                                        <input type="text"
                                            value={this.state.startYear}
                                            onChange={this.handleChange}
                                            id="startYear" />
                                    </div>
                                </label>

                            </div>
                            <div className="row">

                                <label>
                                    End Year (YYYYMMDD):
                                        <div className="col-md-12">
                                        <input type="text"
                                            value={this.state.endYear}
                                            onChange={this.handleChange}
                                            id="endYear" />
                                    </div>
                                </label>

                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ArticleList articles={this.state.articles}></ArticleList>
                {/*<SaveArticles savearticles={this.state.savearticles}></SaveArticles>*/}
            </div>
        )
    }

});

module.exports = SearchForm;
