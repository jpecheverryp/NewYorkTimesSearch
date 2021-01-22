
$(".btn").on("click", function (event) {
    event.preventDefault();

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