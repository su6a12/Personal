var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", "$http", function($scope, $http) {
  var searchText, wikiAPI;
  var wikiResult = "https://en.wikipedia.org/wiki/";
  $scope.resultsList = [];
  //$(function() {
  	//$("button.btn").on("click", function() {
  $scope.searchQuery = function() {
	  	searchText = $("#search-field").val();
	  	//generator returns a list of pageids, those are in turn plugged into wikipedia URL to retrieve page URL
	  	//wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&list=search&rvprop=content&format=json&srlimit=10&prop=pageimages|extracts&explaintext=true&exintro=true&exsentences=1&srsearch=" + 
	  	//searchText + "&generator=search&gsrsearch=" + searchText + "&gsrlimit=10&callback=JSON_CALLBACK";
	  	wikiAPI = "http://en.wikipedia.org/w/api.php?action=query&generator=search&prop=extracts&exintro=true&exlimit=max&explaintext=true&" +
	  						"exsentences=1&pilimit=max&format=json&gsrsearch=" + searchText + "&callback=JSON_CALLBACK";

	  	$http.jsonp(wikiAPI).
		  	then(function(data) {
		  		console.log(data);
		    	var results = data.data.query.pages;
		    	console.log(results);
		    	$.each(results, function(key, value) {
		    		$scope.resultsList.push({ title: value.title, snippet: value.extract, link: wikiResult + value.title.replace(/\s/g, '%20') });
		    	});
		    	console.log($scope.resultsList);
		  		}, function(error) {
		    	console.log(error);
		  	});		// end of then callback
 		//});				// end of button event listener
	}
 		resultsList = [];
  //});					// end of $(function() {})
}]);					// end of controller

/////////////////////Old version////////////////////////////////
// $(document).ready(function() {

//   var searchText, wikiAPI;

//   $("button").on("click", function() {
//     searchText = $("#search-field").val();
//     wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&callback=?";

//   APIOptions = {
//     srsearch: searchText
//   };
//   $.getJSON(wikiAPI, APIOptions, function(data) {
//     console.log(data);
//   });
//   });
// });









