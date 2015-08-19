var camperApp = angular.module("camperApp", []);

camperApp.controller("camperController", ["$scope", "$http", function($scope, $http) {

  $http({method: "GET", url: "http://www.freecodecamp.com/news/hot"}).success(function(data) {
  	$scope.query = "";
  	$scope.image = data.image;
    $scope.posts = data;
    $scope.image = function(article) {
    	return article.image || "http://placekitten.com/g/195/195";
    };
    $scope.result = [];
  });   // end of $http
}]);    // end of controller