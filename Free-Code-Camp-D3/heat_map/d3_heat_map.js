$(document).ready(function() {

	$.getJSON("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json", function(data) {

		var baseTemp = data.baseTemperature;
		var tempsData = data.monthlyVariance;

		// finds the lowest and highest values of variance from base temp
		// will be used to determine color of rectangle
		// increasing the min and max for a wider range
		var colorDomain = d3.extent(tempsData.map(function(each) {
      return baseTemp + each.variance;
    }));

		var dataLength = 38;
		var row_num = Math.floor((tempsData.length / 12) / 10);	// set the row ticks to equal about the number of decades in the data
		

		var startingYear = tempsData[0].year;
		var endingYear = tempsData[tempsData.length-1].year;
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var colors = ["#ED478C", "#F06E1D", "#DFED47", "#B4EBF9", "#55D2F1", "#2FC8EE", "#2F9EEE", "#5D2EE8"];
		var colorRange = d3.scale.quantile().domain(colorDomain).range(colors);

		console.log(colorRange.quantiles());

		var margin = { top: 0, right: 20, bottom: 80, left: 70 };

		var outerWidth = 1200;
		var outerHeight = 600;
		var innerWidth = outerWidth - margin.left - margin.right;
		var innerHeight = outerHeight - margin.top - margin.bottom;
		// determine width of each element by width of chart and number of years
		var rectWidth = (innerWidth/(endingYear-startingYear));
		var legendWidth = rectWidth * 15;
		var legendHeight = rectWidth * 5;


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
						.attr("transform", "translate(0, " + (innerHeight-20) + ")")
						.call(xAxis);

		// y-axis
		var yAxis = heatMap.append("g")
						.attr("class", "y axis")
						.attr("transform", "translate(-10, 25)")
						.selectAll("text")
						.data(months)
						.enter()
						.append("text")
						.text(function(d) { return d; })
						.attr("x", 0)
						.attr("y", function(d, i) { return (i+1) * dataLength; })
						.attr("text-anchor", "end");

		var tooltip = d3.select("#wrapper")
						.append("div")
						.attr("class", "tooltip")
						.style("opacity", 0);

		var legend = heatMap.selectAll("g.legend")
						// quantiles() creates an array
						// add one to array to match number of colors
						.data([2].concat(colorRange.quantiles()), function(each) { return each; })
						.enter()
						.append("g")
						.attr("class", "legend");

		legend.append("rect")
						// subtract innerWidth by total width of legend to get starting point
						// that will push legend to the far right edge
						.attr("x", function(d, index) { return (legendWidth * index) + (innerWidth - legendWidth * 8); })
						.attr("y", outerHeight - 50)
						.attr("width", legendWidth)
						.attr("height", legendHeight)
						.style("fill", function(d, index) { return colors[index]; });

		legend.append("text")
						.text(function(each) { return "~" + each.toFixed(2); })
						// center it by adding legendWidth/4
						.attr("x", function(d, index) { return (legendWidth * index + legendWidth/5) + (innerWidth - legendWidth * 8); })
						.attr("y", outerHeight - 10);

		// rectangles
		var rectangles = heatMap.selectAll("rect.stats")
						.data(tempsData)
						.enter()
						.append("rect")
						.attr("class", "stats")
						.attr("x", function(item) {
							return rectWidth * (item.year - startingYear);
						})
						.attr("y", function(item) {
							return item.month * dataLength;
						})
						.attr("width", rectWidth)
						.attr("height", dataLength)
						.style("fill", function(each) {
							return colorRange(baseTemp + each.variance);
						})
						.on("mouseover", function(each) {
							tooltip.transition()
							.style("opacity", 0.7);
							var diff = (baseTemp + each.variance).toFixed(3);
							tooltip.html(each.year + ": " + months[each.month-1] + "<br/>" + diff + "&#8451;" + "<br/>Variance: " + each.variance + "&#8451;")
							.style("left", (d3.event.pageX) - 70 + "px")
							.style("top", (d3.event.pageY) - 90 + "px");
						})
						.on("mouseout", function(each) {
							tooltip.transition()
							.style("opacity", 0);
						});

	}); // end of getJSON

}); // end of document.ready