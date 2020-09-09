var book=[15];
var svg=d3.select("#svg-area")
    .append("svg")
    .attr("width","600")
    .attr("height","400");
svg.append("rect")
.classed("bar",true)
.data(book)
.attr("width",100)
.attr("height",function(d){
    return d*10;
})
.attr("x",0)
.attr("y",0);