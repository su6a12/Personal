$(document).ready(function() {
	
	var currentLat, currentLong, currentLocation, tempF, tempC;
	var unit = "Imperial", degreeType = "&deg;F";	//Get info in Farenheit

	$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg")');

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
			$("#temp").html(data.main.temp + " " + degreeType);

			tempF = data.main.temp;
			tempC = (tempF - 32) / 1.8;

			if (tempF <= 32) {
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/1127/cold-snow-landscape-nature.jpg")');
			}
			else if (tempF > 95) {
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/1183/red-desert-dry-hill.jpg")');
			}
			else if (data.rain in data) {
				$("body").css("backgroundImage", 'url("https://static.pexels.com/photos/896/city-weather-glass-skyscrapers.jpg")');
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



