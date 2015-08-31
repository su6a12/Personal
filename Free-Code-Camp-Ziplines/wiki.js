$(document).ready(function() {

	var wikiAPI = "https://en.wikipedia.org/w/api.php&callback=?", searchText;

	$("button").on("click", function() {
		searchText = $("#search-field").val();
	});

	// $.ajax({
	// 	url: wikiAPI,
	// 	datatype: "jsonp",
	// 	type: "GET",
	// 	data: searchText,
	// 	success: function(data) {
	// 		console.log(data);
	// 	}
	// });


		var wikiOptions = {
			action: "query",
			list: "search",
			format: "json",
			srsearch: searchText
		};

		function wikiResults(data) {
			console.log(data);
		}
		$.getJSON(wikiAPI, wikiOptions, wikiResults);



});