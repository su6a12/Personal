$(document).ready(function() {

	$.getJSON("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json", function(data) {

		var tempsData = data.monthlyVariance;

		var dataWidth = 5;
		var dataLength = 38;
		var column_num = 12;
		var row_num = Math.floor((tempsData.length / 12) / 10);	// set the row ticks to equal about the number of decades in the data
		

		var startingYear = tempsData[0].year;
		var endingYear = tempsData[tempsData.length-1].year;
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var colors = ["#ECFAFD", "#D9F5FC", "#C6F0FA", "#B4EBF9", "#A1E6F7", "#7BDCF4", "#55D2F1", "#2FC8EE", "#12B9E2", "#0C7B97", "#095C71"];

		var margin = { top: 10, right: 20, bottom: 80, left: 70 };

		var outerWidth = 1200;
		var outerHeight = 600;
		var innerWidth = outerWidth - margin.left - margin.right;
		var innerHeight = outerHeight - margin.top - margin.bottom;


		var heatMap = d3.select(".heat-map")
						.attr("width", outerWidth)
						.attr("height", outerHeight)
						.attr("class", "heat-map")
						.append("g")
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		var xScale = d3.scale.linear().domain([startingYear, endingYear]).range([0, innerWidth]);
		var yScale = d3.scale.linear().domain([months]).range([0, innerHeight]);


		// x-axis
		var xAxis = d3.svg.axis()
						.scale(xScale)
						.orient("bottom")
						.ticks(row_num)
						.tickFormat(d3.format("d"));

		heatMap.append("g")
						.attr("class", "x axis")
						.attr("transform", "translate(0, " + innerHeight + ")")
						.call(xAxis);

		//y-axis
		var yAxis = heatMap.append("g")
						.attr("class", "y axis")
						.attr("transform", "translate(-10, 20)")
						.selectAll("text")
						.data(months)
						.enter()
						.append("text")
						.text(function(d) { return d; })
						.attr("x", 0)
						.attr("y", function(d, i) { return (i+1) * dataLength; })
						.attr("text-anchor", "end");

		// var legend = heatMap.selectAll(".legend")
		// 				.data([0, 2.7, 3.9, 5.0, 6.1, 7.2, 8.3, 9.4, 10.5, 11.4, 12.7])
		// 				.enter()
		// 				.append("g")
		// 				.attr("class", "legend");

		// legend.append("rect")
		// 				.attr("x", function(d, i) { return dataWidth*5*i; })
		// 				.attr("y", function(d, i) { return dataLength/2; })
		// 				.attr("width", dataWidth*20)
		// 				.attr("height", dataLength/2)
		// 				.style("fill", function(d, i) { return colors[i]; });

		// legend.append("text")
		// 				.text(function(d) { return d; })
		// 				.attr("width", dataWidth*20)
		// 				.attr("x", function(d, i) { return dataWidth*5*i; })
		// 				.attr("y", function(d, i) { return dataLength/2; });



	}); // end of getJSON

}); // end of document.ready