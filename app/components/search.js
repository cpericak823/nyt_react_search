var React = require("react");

var SearchForm = React.createClass({
    //initalize state
    getInitialState: function () {
        return {
            topic= "",
            startYear= "",
            endYear= ""
        };
    },
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState({ term: newState })
    },
    handleSubmit: function (event) {
        this.setState({
            topic: this.state,
            startYear: this.state,
            endYear: this.state
        });
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Topic:
          <input type="text"
                        value={this.state.topic}
                        onChange={this.handleChange}
                        required
                        id="topic" />
                </label>
                <label>
                    Start Year:
          <input type="text"
                        value={this.state.startYear}
                        onChange={this.handleChange}
                        id="startYear" />
                </label>
                <label>
                    End Year:
          <input type="text"
                        value={this.state.endYear}
                        onChange={this.handleChange}
                        id="endYear" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        )
    }

});

module.exports = SearchForm;
