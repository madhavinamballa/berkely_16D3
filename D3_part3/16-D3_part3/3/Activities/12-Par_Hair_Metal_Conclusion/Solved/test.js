var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
//append svg
var svg=d3.select(".chart")
.append("svg")
.attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
var chosenXAxis='hair_length';
  function xScale(hair_length,chosenXAxis){
    var xLinearScale=d3.scaleLinear()
      .domain([d3.min(hairData,d=>[chosenXAxis])])*0.8,d3.max(hairData,d=>[chosenXAxis])
       .range([0,width])
    return xLinearScale;
}
// retrive data
d3.csv("hairData.csv", function(err, hairData) {
    if (err) throw err;
    hairData.forEach(funcrion(data){
        data.hair_length= +data.hair_length;
        data.num_hits= +data.num_hits;
        data.num_albums= +data.num_albums;

    });
    var xLinearScale = xScale(hairData, chosenXAxis);
    var yLinearScle=d3.scaleLinear()
    .domain([0,d3.max(hairData,d=>d.num_hits())])
    .range([height,0]);
    var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);