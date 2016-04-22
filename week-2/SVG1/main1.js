/* use this to test out your function */
window.onload = function() {
 	changeColor("fr", "#89457c");
 	changeColor("es", "#156fa9");
 	changeColor("de", "#fb0000");
 	changeColor("no", "#008000");
 	changeColor("ua", "#95aeab");

}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {

        document.getElementById(id).style.fill = color;

}