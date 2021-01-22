var queryURL = "http://developer.nytimes.com/article_search_v2.json"
// API KEY ekSU7YWoghGMsmMBcqsinm9MNpHIbC3E

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {
        console.log(queryURL);
        console.log(response);
    });