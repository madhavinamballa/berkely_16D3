var svgWidth = 960;
var svgHeight = 660;
var chartMargin={
  top:30,
  bottom:30,
  left:30,
  right:30
};
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;
var svg=d3.select("body")
.append("svg")
.attr("height",svgHeight)
.attr("width",svgWidth);
var chartGroup=svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
d3.csv("hours-of-tv-watched.csv",function(error,tvdata){
  if (error) throw error;
  tvdata.forEach(function(data){
    data.hours = +data.hours;

  });
  

});