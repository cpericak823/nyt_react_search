var axios = require("axios");
var apiKey = "b503af34c179499aa14f6b213f0c11a1";

var helper = {
    getArticles: function (state) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + state.topic;
        return axios.get(queryURL).then(function (response) {
            if (response.data.results[0]) {
                return response.data.results[0];
            }
        }).catch(function (e) {
            console.log(e)
            // If we don't get any results, return an empty string
            return "";
        });
    }
    //write a saveArticles function to save the article title and link on click of the save button
}
module.exports = helper;