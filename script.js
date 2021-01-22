$(".btn").on("click", function (event) {
    event.preventDefault();

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


    var apiKey = ekSU7YWoghGMsmMBcqsinm9MNpHIbC3E
    var term = $("#term").val();
    console.log($("#term").val());

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })

})