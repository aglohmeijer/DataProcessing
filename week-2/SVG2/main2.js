/* use this to test out your function */
window.onload = function() {
	/* parse JSON data to array so we can iterate */
 	var data = JSON.parse(document.getElementById('data').innerHTML);

 	/* iterate over array */
 	for(n = 0; n < data.length; n++)
 	{
 		/* set country and index (this way the code below (line 37>) looks more clean)*/
 		var country = data[n][0];
 		var index = data[n][1];

 		/* set variable limits and variable colors (easy to adjust later on if borders/colors are not clearly visible) */
 		a = 0;
 		b = 2.5;
 		c = 5;
 		d = 7.5;
 		e = 10;
 		f = 12.5;
 		g = 15;
 		h = 17.5;
 		i = 20;
 		var color1 = "#FFF7EC";
 		var color2 = "#FEE8C8";
 		var color3 = "#FDD49E";
 		var color4 = "#FDBB84";
 		var color5 = "#FC8D59";
 		var color6 = "#EF6548";
 		var color7 = "#D7301F";
 		var color8 = "#B30000";
 		var color9 = "#7F0000";

 		var test = document.getElementById(country);
 		/* only fill country with color if data is known (cannot fill color if element = null) */
		if(test)
		{
			/* "efficient" if/else-if statements */
			if(a <= index && index <= b)
			{
				changeColor(country, color1);
			}
			else if(b < index && index <= c)
			{
				changeColor(country, color2);
			}
			else if(c < index && index <= d)
			{
				changeColor(country, color3);
			}		
			else if(d < index && index <= e)
			{
				changeColor(country,color4);
			}		
			else if(e < index && index <= f)
			{
				changeColor(country, color5)
			}
			else if(f < index && index <= g)
			{
				changeColor(country,color6);
			}		
			else if(g < index && index <= h)
			{
				changeColor(country, color7)
			}
			else if(index > h)
			{
				changeColor(country, color8)
			}
		}		
	}
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
        document.getElementById(id).style.fill = color;
}