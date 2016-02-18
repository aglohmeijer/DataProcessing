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
    
// loop through [date, temp] array and fill new different arrays with result
for(var n = 0; n < array.length - 1; n++)
{
    dates[n] = ((array[n]).split(','))[0];
    temps[n] = ((array[n]).split(','))[1];
}
  
// log dates & temps
console.log(dates);
console.log(temps);
 
 
// transforming data to screen coordinates (do rough calculation on piece of paper)
function createTransform(domain, range){
	\\ domain is a two-element array of the data bounds [domian_min, domian_max]
	\\ range is a two-element array of the screen bounds [range_min, range_max]
	\\ This gives you two equations to solve:
	\\ range_min = alpha * domain_min + beta
	\\ range_max = alpha * domain_max + beta
 		\\ Implement your solution here:
 		var alpha = ...;
	var beta = ...;
	
	return function(x){
		return alpha * x + beta;
	};
}
 
// test function
var transform = createTransform([10, 20], [10, 20]);
    console.log(transform(15)); // should log 15
 
 
 
 
 
 
 
