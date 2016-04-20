/**
 * scripts.js
 *
 * Data Processing
 * Seperate javascript enclosed with HTML file
 * 
 * Anne Lohmeijer
 * UvA ID 10447555
 *
 * Note: instead of a mouseMOVE I chose to implement a mouseCLICK tooltip since I could not exactly
 * write the code such that the drawing and removal of the crosshiar where fluently enough to me.
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
ctx.fillText("Average temperature per 24hrs in De Bilt (NL) (2015)", 180, 50);

// draw y-axis values
ctx.font = "16px serif";
for (var n = -10; n < 40; n = n + 5){
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
ctx.fillText("2015", 100, 440);
ctx.fillText("month of the year", 400, 440);
ctx.fillText("2016", 750, 440); 
var months = ["February", "March", "April", "May", "June", "July", "August", "September", "October",
				"November", "December", "January"];
ctx.rotate(-Math.PI/4);
ctx.textAlign = "right";
for (var n = 0; n < months.length; n++){
	ctx.fillText(months[n], -230 + n * 42, 430 + n * 42);
}


// short function to convert Javascript date into DD/MM/YYYY format (source: Stackoverflow)
function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

// obtain second canvas element to draw cross-hair
var canvas2 = document.getElementById('mycanvas2');
var ctx2 = canvas2.getContext('2d');

// define some constants to obtain the correct date when hovering/clicking
var startdate = new Date(((array[0]).split(','))[0]).getTime();
var enddate = new Date(((array[array.length - 2]).split(','))[0]).getTime();

// define different transforms (need them in more than one function)
var datetransform = createTransform([119, 800], [startdate, enddate]);
var temptransform = createTransform([456, 50], [-10, 35]);

// function which draws crosshair
function showdateandtemp(a, b){
	ctx2.beginPath();
	ctx2.moveTo(80, b - 20);
	ctx2.lineTo(800, b -20);
	ctx2.moveTo(a -20 , 60);
	ctx2.lineTo(a -20, 450);
	ctx2.stroke();
}

// function to clean second canvas
function erasecrosshair (){
	ctx2.clearRect(0, 0, canvas.width, canvas.height);
}

ctx2.font = "16px serif";

// create an event listener to draw tooth pick and obtain information for tooltip
mycanvas2.onclick = function(){
	// only show tooltip info if user clicked inside the graph else do nothing
	if (119 < event.clientX && event.clientX < 800 && 50 < event.clientY && event.clientY < 456){
		// draw crosshair
		showdateandtemp(event.clientX, event.clientY);

		// render date & temperature info
		var x = Math.round(datetransform(event.clientX));
		var y = Math.round(temptransform(event.clientY));
		ctx2.fillText("[" + convertDate(x) + ", " + y + " degrees Celcius]", 500, 100);

		// erase information after two seconds
		setTimeout(erasecrosshair, 2000);
	}

	// else inform user about correct use
	else{
		ctx2.fillText("Click inside the graph to see information!", 500, 130);
		setTimeout(erasecrosshair, 3000);
	}

}
