var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

var chartWidth=svgWidth-chartMargin.left-chartMargin.right;
var chartHeight=svgHeight-chartMargin.top-chartMargin.bottom;
var svg=d3.select('body').
append('svg').
attr('height',svgHeight).
attr('width',svgWidth);
var chartGroup=svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
// load data from the csv
d3.csv("hours-of-tv-watched.csv",function(error,tvdata){
  if (error) return console.warn(error);
  tvdata.forEach(function(data){
    data.hours = +data.hours;
  });
  var barSpacing = 10; // desired space between each bar
  var scaleY = 10; 
  var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;
  //create a code to buuid bar chart
  chartGroup.selectAll('.bar').
  data(tvdata).
  enter().
  append("rect").
  classsed("bar",true).
  attr("width",d=>barWidth).
  attr("height",d=>d.hours*scaleY)



});
