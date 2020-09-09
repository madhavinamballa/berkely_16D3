var svgWidth = 1000;
var svgHeight = 500;

// create an SVG element
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Load csv data
d3.csv("NCHS_life_expectancy_at_birth.csv", function(error, lifeData) {

  if (error) return console.warn(error);

  console.log(lifeData);

  // cast the data from the csv as numbers
  lifeData.forEach(function(data) {
    data.year = +data.year;
    data.lifeExpectancy = +data.lifeExpectancy;
  });

  // Create a scale for your independent (x) coordinates

  var xScale = d3.scaleLinear()
  .domain(d3.extent(lifeData,d=> d.year))
  .range([0, svgWidth]);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(lifeData, d => d.lifeExpectancy)])
  .range([svgHeight,0]);

var createLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.lifeExpectancy));


  // Create a scale for your dependent (y) coordinates


  // create a line generator function and store as a variable
  // use the scale functions for x and y data


  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.

//console.log("Drawing commands:", lineGenerator(dataArray));

//var svg = d3.select("#path-3");
  
svg.append("path")
    .attr("fill", "none")
    .attr("stroke", "orange")
    .attr("stroke-width", 1)
    .attr("d", createLine(lifeData));
});
