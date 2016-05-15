// Het is me niet gelukt een tooltip toe te voegen op de goede locatie. Daarnaast gaat het schalen van
// de crosshair ook niet goed. Je kunt de muis bewegen van het begin tot halverwege de grafiek,
// en hiermee schuift de tooltip van het begin tot het einde van de grafiek.
// Tot slot, ik ben niet toegekomen aan de plot van meerdere lijnen (d3lineExtended).

// Javascript voor D3 line chart 
var margin = {top: 20, right: 80, bottom: 70, left: 50},
	width = 1400,
	height = 600;

// Scale X and Y
var x = d3.time.scale()
	.range([0, width]);

var y = d3.scale.linear()
	.range([height, 0]);


var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// Apply B-spline interpolation on line graph
var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.YYYYMMDD); })
    .y(function(d) { return y(d.voorschoten_gemiddeld / 10); });

// Append SVG to body
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load data from CSV file
d3.csv("data.csv", function(error, data) {
	if (error) return console.warn(error);

    // Convert all dates
	data.forEach(function(d) {
	d.YYYYMMDD = d3.time.format("%Y%m%d").parse(d.YYYYMMDD);
	});

    // Set x and y domain
    var xDomain = d3.extent(data, function(d) {return d.YYYYMMDD; });
    var yDomain = d3.extent(data, function(d) {return d.voorschoten_gemiddeld / 10});

    // Set scaling for tooltip and apply domain to data
    var xScale = x.domain(xDomain);
    var yScale = y.domain(yDomain);

	// Create x-axis
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + (height - 57) + ")")
		.call(xAxis)
    .selectAll('text')
        .attr("dx", "-1em")
        .attr("dy", "-0.8em")
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "end");

	// Create y-axis
	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("dy", "2em")
    .attr("dx", "-2em")
		.style("text-anchor", "end")
		.text("Temperature (degrees Celcius)");

    // Draw line graph
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // Define the div for the tooltip
    var tooltip = d3.select("body")
        .append("div");        

    var g = svg.append('g');

    var crosshair = g.append('g').attr('class', 'line');

    // Horizontal line
    crosshair.append('line')
        .attr('id', 'crosshair_X')
        .attr('class', 'crosshair_line');

    // Vertical line    
    crosshair.append('line')
        .attr('id', 'crosshair_Y')
        .attr('class', 'crosshair_line');

    // Push dates in an array to use closest function later
    var dates = [];
    for (i = 0; i < data.length; i++)
        dates.push((data[i].YYYYMMDD).getTime());

    // Draw cross-hair
    g.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on('mouseover', function() { crosshair.style('display', null); })
        .on('mousemove', function() {
            var mouse = d3.mouse(this);

            // Determine closest data point voor tooltip
            var a = x.invert(mouse[0]).getTime();
            var index = closest(a);

            // Determine date voor tooltip
            var tooltip_date = new Date(dates[closest(a)]);


            // console.log(index);
            var newX = xScale(data[Math.round(index)].YYYYMMDD);
            var newY = yScale((data[Math.round(index)].voorschoten_gemiddeld / 10));

            crosshair.select("#crosshair_X")
                .attr("x1", x(xDomain[0]))
                .attr("y1", newY)
                .attr("x2", x(xDomain[1]))
                .attr("y2", newY);

            crosshair.select("#crosshair_Y")
                .attr("x1", newX)
                .attr("y1", y(yDomain[0]))
                .attr("x2", newX)
                .attr("y2", y(yDomain[1]));
        })
        .on('mouseout', function() { crosshair.style('display', 'none'); 
                })
        
// Heb heel veel uren besteed aan de bisect functie om de dichtsbijzijnde
// datum te vinden maar tevergeefs, dus eigen functie geschreven.
// Het schalen hiervan gaat helaas niet goed. Kan niet vinden waarom. 
// Als je de muis halverwege de grafiek houdt laat hij de tooltip helemaal aan het einde zien.
function closest(num){
    var index = dates[0];
    var diff = Math.abs(num - index);
    for (var val = 0; val < dates.length; val++){
        var newdiff= Math.abs (num - dates[val]);
        if (newdiff < diff) {
            index = val;
            if (index < 0){
                index = 0;
            }
        }
    }
    return index;
}

});




