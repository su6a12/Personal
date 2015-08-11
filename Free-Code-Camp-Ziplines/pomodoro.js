var pomodoroApp = angular.module("pomodoroApp", []);

pomodoroApp.controller("pomodoroController", ["$scope", "$timeout", function($scope, $timeout) {
	$scope.breakTime = 5;
	$scope.workTime = 25;
	$scope.countdown = $scope.workTime;
	$scope.isBegin = "begin";
	var minutes = $scope.countdown;
	var seconds = 0;
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

		// randomize color of countdown text
		var red = Math.floor(Math.random() * 255);
		var green = Math.floor(Math.random() * 255);
		var blue = Math.floor(Math.random() * 255);
		$("#timer").css("color", "rgb(" + red + ", " + green + ", " + blue + ")");
		
		$scope.countdown = "" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

		if (minutes === 0 && seconds === 0) {
			audio.play();
			$scope.isBegin = "pause";		// break immediately begins
			$scope.countdown = $scope.breakTime;
			minutes = $scope.countdown;
			timeout = $timeout($scope.updateTimer, 1000);		// start break countdown
		}
		else {
			timeout = $timeout($scope.updateTimer, 1000);
		}
	};

	$scope.start_stop = function() {
		if (!isPlaying) {
			timeout = $timeout($scope.updateTimer, 1000);
			isPlaying = true;
			$scope.isBegin = "pause";		// currently playing
		}
		else {
			$timeout.cancel(timeout);
			isPlaying = false;
			$scope.isBegin = "resume";		// currently paused
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