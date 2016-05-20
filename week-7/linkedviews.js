// BARCHART SCRIPT

// set margins for svg chart and scales for axis'
var margin = {top: 10, right: 30, bottom: 150, left: 50},
    width = 1600,
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
    .tickFormat(function(d) {return d;});

// use d3.tip for tooltip above each bar
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<span style='color:#ffbf00'>" + d.country + ": " + d.qoflifeindex + "</span>";
  })

// create chart
var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// call on tooltip
  chart.call(tip);

// load data from extern file
d3.csv('dataweek7.csv', function(error, data) {
  x.domain(data.map(function(d) { return d.country; }));
  y.domain([0, d3.max(data, function(d) { return d.qoflifeindex; })]);

  console.log(data);

// add labels to x axis
  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
       .selectAll("text")  
      .style("text-anchor", "end")
      .attr("dx", "-1em")
      .attr("dy", "-0.1em")
        .attr("transform", "rotate(-60)");

// add labels to y axis
chart.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Index");

//  console.log(data[0].ccode);

// create bars inside chart
chart.selectAll(".bar")
    .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    // (1) .attr("id", data[..].ccode)... hier op alle manieren geprobeerd elke bar een uniek ID te geven
    .attr("x", function(d) { return x(d.country); })
    .attr("y", function(d) { return y(d.qoflifeindex); })
    .attr("height", function(d) { console.log("D", d.qoflifeindex, "H", height - y(d.qoflifeindex), "Y", y(d.qoflifeindex)); return (height - y(d.qoflifeindex)); })
    .attr("width", x.rangeBand())
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);


function type(d) {
  d.qoflifeindex = +d.qoflifeindex; // coerce to number
    return d;
}

var dataset = {};

var onlyValues = data.map(function(d){ return d.purchpowindex; });

var minValue = Math.min.apply(null, onlyValues),
        maxValue = Math.max.apply(null, onlyValues);

// create color palette function
var paletteScale = d3.scale.linear()
        .domain([minValue,maxValue])
        .range(["#EFEFFF","#02386F"]);


data.forEach(function(item){
  var iso = item.ccode,
    value = item.purchpowindex;

  dataset[iso] = { purchpowindex : value, fillColor: paletteScale(value) };

});

// render worldmap
new Datamap({
    element: document.getElementById('container'),
    data: dataset,

    done: function(datamap){
      datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography){

        /* het land dat je aanklikt heeft id = geography.id
        Als je dat gelijkstelt aan het toegewezen id van elke bar zou je de tooltip kunnen renderen (denk ik) 

        veel geprobeerd:
        d3.tip(geography.id);

        of
        chart.call(tip);*/
    
    
      });
    },

    // fill countries which are not listed with default color
    fills: { defaultFill: '#F5F5F5' },
      // mercator projection to render ratio correct
      projection: 'mercator',
        geographyConfig: {
            borderColor: '#99bbff',
            // change fillColor when hovering
            highlightFillColor: '#99bbff',
            // show desired information in tooltip
            popupTemplate: function(geo, data) {

                // set tooltip content
                return ['<div class="hoverinfo">',
                    '<strong>', geo.properties.name, '</strong>',
                    '<br>Purchase Power Index: <strong>', data.purchpowindex, '</strong>',
                    '</div>'].join('');
            }
        }
  });
});
