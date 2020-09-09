//define svg height and with
var svgWidth = 960;
var svgHeight = 500;
//define chartmargin 
var margin={
  top:30,
  bottom:30,
  left:30,
  right:30
};
//chart width and height
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;
//select body elememnt of the html
var svg=d3.select("body")
.append("svg")
.attr("width",svgWidth)
.attr("height",svgHeight);
//append grpoup area
var chartGroup=svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);
var parseTime=d3.timeParse("%Y");
//load data from csv
d3.csv("forcepoints.csv",function(erroe,forceData){
  if (error) throw error;

  // Print the forceData
  console.log(forceData);
  forceData.forEach(function(data){
    data.force= +data.force;
    data.date=parseTime(data.date);
  });
  //confifure timescales
  var XTimeScale=d3.sclaeTime()
  .domain(extent(forcedata,data=>data.force))
  .range(0,chartWidth)
})
//configure yscale
var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(forceData, data => data.force)])
    .range([chartHeight, 0]);
//create two new finv=ctions passing thesclaes
//in as arguments
var axisBottom=d3.axisBottom(XTimeScale);
var axiLeft=d3.axisLeft(yLinearScale);

//o nfigure a line function which will draw lines
var drawLine=d3.line()
.x(data=>XTimeScale(data.date))
.y(data=>yLinearScale(data.force));
chartGroup.append("path")
.attr("d",drawLine(forceData))
.classed("line",true);

chartGroup.append("g")
.classed("axis",true)
.call(axiLeft)
chartGroup.append("g")
.classed("axis",true)
.attr("tranform",)
.call(axisBottom)