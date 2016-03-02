// on load execute function
window.onload = function() {

	var data; // a global
	d3.json("immigration.json", function(error, data) {
  	if (error) return console.warn(error);
  		//data = json;
  		console.log(data)
  		////
  	
	});
	console.log(data);
}