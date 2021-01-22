var apiKey = "ekSU7YWoghGMsmMBcqsinm9MNpHIbC3E";
var queryURL = "http://developer.nytimes.com/article_search_v2.json" + apiKey;

var searchTerm = "";
var numberRecords = 0;
var startYear = 0;
var endYear = 0;

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {
        console.log(queryURL);
        console.log(response);
    });