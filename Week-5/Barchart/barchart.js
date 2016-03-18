/* set margins for svg chart and scales for axis' */
var margin = {top: 10, right: 30, bottom: 150, left: 50},
    width = 1400,
    height = 400;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(function(d) {return d + "%";});

/* use d3.tip for tooltip above each bar */
var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([-10, 0])
	.html(function(d) {
		return "<strong>Percentage of population:</strong> <span style='color:#ffbf00'>" + d.test + " %</span>";
	})

/* create chart */
var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/* call on tooltip */
chart.call(tip);

/* load data from extern file */
d3.tsv("immigration.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.test; })]);

/* add labels to x axis */
  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
       .selectAll("text")  
     	.style("text-anchor", "end")
     	.attr("dx", "-1em")
     	.attr("dy", "-0.1em")
      	.attr("transform", "rotate(-60)");

/* add labels to y axis */
chart.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Percentage");

/* create bars inside chart */
chart.selectAll(".bar")
    .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.name); })
    .attr("y", function(d) { return y(d.test); })
    .attr("height", function(d) { return height - y(d.test); })
    .attr("width", x.rangeBand())
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
});

function type(d) {
  d.test = +d.test; // coerce to number
    return d;
}