$(document).ready(function() {

	var currentLat, currentLong, currentLocation, currentTime, isSunset, tempF, tempC;
	var unit = "Imperial", degreeType = "&deg;F";	//Get info in Farenheit

	//$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg")');

	$.getJSON("https://www.telize.com/geoip?callback=?", function(location) {
    currentLat = location.latitude;
    currentLong = location.longitude;
    currentLocation = location.city;

    $("#location").text(currentLocation);

    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather";

		var weatherOptions = {
			"APPID": "020ae586fa001f4a8d9094a1b0911aae",
			"lat": currentLat,
			"lon": currentLong,
			"units": unit
		};

		function weatherData(data) {
			console.log(data);
			tempF = data.main.temp;
			$("#temp").html(tempF + " " + degreeType);

			currentTime = SunCalc.getTimes(new Date(), currentLat, currentLong);	// using suncalc.js file code

			isSunset = (new Date().getTime() - currentTime.sunset.getTime() >= 0) ? true : false;
			tempC = (tempF - 32) / 1.8;
			//currentTime = new Date().getTime();
			//console.log(currentTime);

			if (data.snow in data) {																					// if it's snowing
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/1127/cold-snow-landscape-nature.jpg")');
			}
			if (tempF > 90 && !(data.rain in data) && !isSunset) {						// if it's hot, not raining	nor nighttime	
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/1183/red-desert-dry-hill.jpg")');
			}
			if (data.rain in data) {																					// if it's raining
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/896/city-weather-glass-skyscrapers.jpg")');
			}
			if (data.clouds.all > 60 && !(data.rain in data) && !isSunset) {	// if it's cloudy, not raining nor nighttime
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/3942/clouds-cloudy-field-agriculture.jpeg")');
			}
			if (isSunset) {																										// if it's nighttime
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/6546/sky-night-space-trees.jpeg")');
			}
			else {
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/6861/landscape-clouds-blue-trees.jpg")');
			}
		}

		$.getJSON(weatherAPI, weatherOptions, weatherData);

		$("input:radio[name=type]").on("change", function() {
			if ($(this).val() === "F") {
				degreeType = "&deg;F";
				$("#temp").html(tempF + " " + degreeType);
			}
			else {
				degreeType = "&deg;C";
				$("#temp").html(tempC.toFixed(2) + " " + degreeType);
			}
		}); //end of onchange function
  });	//end of getJSON

});	
	

	// if(navigator.geolocation) {
	// 	navigator.geolocation.getCurrentPosition(function(position) {
	// 		currentLat = position.coords.latitude;
	// 		currentLong = position.coords.longitude;
	// 	},
	// 	function error() {
	// 		alert("geolocation not supported");
	// 	});
	// }

		//console.log(currentLong, currentLat);



