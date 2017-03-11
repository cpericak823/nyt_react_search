var axios = require("axios");
var apiKey = "b503af34c179499aa14f6b213f0c11a1";

var helper = {
    getArticles: function (state) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + state.topic + "&?begin_date=" + state.startYear + "&?end_date=" + state.endYear;
        return axios.get(queryURL).then(function (body) {
            console.log(body.data.response.docs);
            if (body.data.response.docs) {
                return body.data.response.docs;
            }
        }).catch(function (e) {
            console.log(e);
            // If we don't get any results, return an empty string
            return "";
        });
    },

    //write a saveArticles function to save the article title and link on click of the save button
    saveArticle: function (postdata) {
        return (axios.post("/articles", postdata).then(function (res) {
            console.log(res);
        }).catch(function (e) {
            console.log(e);
        }));
    }
}
//    deleteArticles: function (state) {
        // return (axios.delete("/articles/:id", {
        //     id:"id",
        //     articleName: "article name",
        //     date: "date"
        // }).then(function (res) {
        //     console.log(res);
        // }).catch(function (e) {
        //     console.log(e);
        // }));
    
module.exports = helper;