//svg height and width
var svgWidth = 960;
var svgHeight = 500;
//margin 
var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
  };
  //chart width and height
  var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
//appned svg in html
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
//append grouo
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
//load data
d3.csv("donuts.csv", function(error, donutData) {
    if (error) throw error;
    donutData.forEach(function(data) {
        data.date = parseTime(data.date);
        data.morning = +data.morning;
        data.evening = +data.evening;
    });
//xscale
var XTimeScale=d3.scaleTime()
.domain(d3.extent(donutData,d=>d.date))
.range(0,width);
var yLinearScale=d3.scaleLinear()
.range([height,0]);
var morningMax=d3.max(donutData,d=>d.morning);
var eveningMax = d3.max(donutData, d => d.evening);
var yMax;
if(morningMax > eveningMax){
    yMax=morningMax
}
else{
    yMax=eveningMax
}
yLinearScale.domain([0, yMax]);
var bottomAxis=d3.axisBottom(XTimeScale).tickFormat(d3.timeFprmat("%d-%b"));
var leftAxis = d3.axisLeft(yLinearScale);
//apend the axes to the chartGroup
chartGroup.append("g")
.attr("transform", `translate(0, ${height})`)
.call(bottomAxis);
chartGroup.append("g").call(leftAxis);
//line generator
var line1 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.morning));

  // Line generator for evening data
  var line2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.evening));
//append the path
chartGroup
.append("path")
.attr('d',line1(donutData))
.classed("line green",true);
chartGroup
.append("path")
.attr("d" line2(donutData))
.classed("line orange",true)

});