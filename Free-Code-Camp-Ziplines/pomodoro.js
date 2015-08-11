var pomodoroApp = angular.module("pomodoroApp", []);

pomodoroApp.controller("pomodoroController", ["$scope", "$timeout", function($scope, $timeout) {
	$scope.breakTime = 5;
	$scope.workTime = 0;
	$scope.countdown = $scope.workTime;
	$scope.isBegin = "begin";
	var minutes = $scope.countdown;
	var seconds = 5;
	var isPlaying = false;
	var audio = new Audio("glass_ping.mp3");
	var timeout;

	$scope.updateTimer = function() {
		if (minutes > 0) {
			if (seconds === 0) {
				seconds = 60;
				minutes--;
			}
			seconds--;
		}
		else if (minutes === 0) {
			if (seconds > 0) {
				seconds--;
			}
		}
		$scope.countdown = "" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);


		if (minutes === 0 && seconds === 0) {
			audio.play();
			$scope.isBegin = "begin";
			$scope.countdown = $scope.workTime;
		}
		else {
			timeout = $timeout($scope.updateTimer, 1000);
		}
	};

	$scope.start_stop = function() {
		if (!isPlaying) {
			timeout = $timeout($scope.updateTimer, 1000);
			isPlaying = true;
			$scope.isBegin = "pause";
		}
		else {
			$timeout.cancel(timeout);
			isPlaying = false;
			$scope.isBegin = "resume";
		}
	};

	$scope.addTime = function(time) {
		if (time === $scope.breakTime) {
			$scope.breakTime++;
		}
		else {
			$scope.workTime++;
			$scope.countdown++;
		}
	}
	$scope.subTime = function(time) {
		if (time > 0) {
			if (time === $scope.breakTime) {
				$scope.breakTime--;
			}
			else {
				$scope.workTime--;
				$scope.countdown--;
			}
		}
	};
}]);