var width=400;
var height=100;
var data=[10,15,20,25,30];
var svg=d3.select("body")
.append("svg")
.attr("width",width)
.attr("height",height);
//create scale
var scale=d3.scalelinear()
.domain([d3.min(data),d3.max(data)])
.range([0,width-100]);
//add scle to axis
var x_axis=d3.axisBottom()
.scale(scale);
//append group and insert axis
svg.append("g")
.call(x_axis);