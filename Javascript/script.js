/**
 * scripts.js
 *
 * Data Processing
 * Seperate javascript enclosed with HTML file
 * 
 * Anne Lohmeijer
 * UvA ID 10447555
 */
 
// set variable to store data from HTML
var data = document.getElementById("rawdata").innerHTML;
 
// split data into strings containing both a date and temperature
var array = data.split('\n');
  
// create new arrays to store date and temps in
var dates = []; 
var temps = [];

// define start date
var startdate = new Date(((array[0]).split(','))[0]).getTime(); 
    
// loop through [date, temp] array and fill new different arrays with result
for(var n = 0; n < array.length - 1; n++)
{
    dates[n] = ((new Date(((array[n]).split(','))[0])).getTime()- startdate) / 86400000; // 86400000 is the number of milliseconds in a day
    temps[n] = Number((Number(((array[n]).split(','))[1]) * 0.1).toFixed(1));
}

// determine array bounds
var dates_min = Math.min.apply(Math, dates);
var dates_max = Math.max.apply(Math, dates);

// it makes more sense to choose our own max and minimum temperature to render
var temps_min = -10;
var temps_max = 30;


// create two element array with bounds
var domaintemps = [temps_min, temps_max];
var domaindates = [dates_min, dates_max];

// transforming data to screen coordinates
function createTransform(domain, range){
 		// transformation solution
 		var alpha = (range[1] - range[0]) / (domain[1] - domain[0]);
	var beta = (range[0] * domain[1] - range[1] * domain[0]) / (domain[1] - domain[0]);
	
	return function(x){
		return alpha * x + beta;
	};
}
 
// CanvasRenderingContext2D
var canvas = document.getElementById('mycanvas')
var width = document.getElementById('mycanvas').width;
var height = document.getElementById('mycanvas').height;

document.getElementById("mycanvas").style.backgroundColor = 'rgba(158, 167, 184, 0.2)';

// transform all temperatures to screen coordinates
var rangetemps = [];
var transform = createTransform(domaintemps, [500, 30]);
	for (n = 0; n < temps.length; n++){
		rangetemps[n] = transform(temps[n]);
	}

// transform all dates to screen coordinates
var rangedates = [];
var transform = createTransform(domaindates, [100, 780]);
	for (n = 0; n < dates.length; n++){
		rangedates[n] = transform(dates[n]);
	}


// draw the graph
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(80, 20);
ctx.lineTo(80, 500);
ctx.moveTo(20, 450);
ctx.lineTo(800, 450);
ctx.moveTo(rangedates[0], rangetemps[0]);
for (n = 1; n < dates.length; n++){
	ctx.lineTo(rangedates[n], rangetemps[n]);
} 
ctx.stroke();
ctx.font = "24px serif";
ctx.fillText("Average temperature per 24hrs in De Bilt (NL) (2014)", 180, 50);

// draw y-axis values
ctx.font = "16px serif";
for (var n = -10; n < 40; n = n + 5){
	console.log(n);
	ctx.fillText(n, 50, 350 - 9 * n);
	ctx.fillText("-", 72, 350 - 9 * n);
}

// draw y-axis labeleling
ctx.save(); 
ctx.rotate(-Math.PI / 2);
ctx.textAlign = "center";
ctx.fillText("temperature in degrees Celsius", -120, 100);
ctx.restore();

// draw x-yas labeling
ctx.rotate(0);
ctx.fillText("2014", 100, 440);
ctx.fillText("month of the year", 400, 440);
ctx.fillText("2015", 750, 440); 
var months = ["February", "March", "April", "May", "June", "July", "August", "September", "October",
				"November", "December", "January"];
ctx.rotate(-Math.PI/4);
ctx.textAlign = "right";
for (var n = 0; n < months.length; n++){
	ctx.fillText(months[n], -230 + n * 42, 430 + n * 42);
}
