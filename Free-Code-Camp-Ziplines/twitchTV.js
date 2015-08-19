$(document).ready(function() {

	//$("body").css("background-image", "url('http://media.bestofmicro.com/8/9/416313/gallery/twitch1_w_500.png')");

	var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","MedryBW"];

	var twitchBaseAPI = "https://api.twitch.tv/kraken/";

	var isStreaming, eachChannel, channelLogo, bio;

	channels.forEach(function(channel) {
		//console.log(channel);
		$.getJSON(twitchBaseAPI + "/users/" + channel + "?callback=?", function(userData) {
			channelLogo = userData.logo || "http://placekitten.com/g/50/50";
			eachChannel = '<li id=' + channel + '>';		// add channel specific id
			eachChannel += '<img class="channel-img" src="' + channelLogo + '">';
			eachChannel += '<div class="channel-name">' + userData.display_name + '</div>';
			eachChannel += '</li>';
			$("#list").append(eachChannel);
			//console.log(eachChannel)

			$.getJSON(twitchBaseAPI + "/streams/" + channel + "?callback=?", function(streamData) {
				//console.log(channel);
				if (!streamData.status) {
					isStreaming = (streamData.stream === null ? false : true);
				}
				bio = '<p id=channelBio>' + userData.bio + '</p>';
				
				if (isStreaming) {											// add new class depending on status
					$("#"+channel).addClass("green yes-stream");
					$("#"+channel).mouseover(function() {	// store channel bio in a div and append to channel li
						$("#"+channel).append(bio);
						$("#channelBio").show("slow");
					}).mouseout(function() {							// remove channel bio div from channel li
						//$("#channelBio").hide("slow");
						$("#channelBio").remove();
					});
					//console.log(bio);
				}																				// end of if (isStreaming)
				else
					$("#"+channel).addClass("red no-stream");

				$("#online").click(function() {					// filter which channels to show based on button clicked
					$(".no-stream").hide();
					$(".yes-stream").show();
				});
				$("#offline").click(function() {
					$(".yes-stream").hide();
					$(".no-stream").show();
				});
				$("#all").click(function() {
					$(".yes-stream,.no-stream").show();
				});
			});
																								// end of streams call
			$.getJSON(twitchBaseAPI + "/channels/" + channel + "?callback=?", function(channelData) {
				$("#"+channel).click(function() {
					window.open(channelData.url);					// open channel on new page
				});																			// end of channels call
			});
		});																					// end of users call
	})																						// end of forEach loop
	$("#search").keyup(function() {								// filter channels based on search field
		var currentVal = $(this).val().toLowerCase();

		$("#list>li").each(function() {							// dynamically checking
			//console.log($(this).attr("id"));
			$(this).attr("id").toLowerCase().indexOf(currentVal) >= 0 ? $(this).show() : $(this).hide();
		});







	});
});

