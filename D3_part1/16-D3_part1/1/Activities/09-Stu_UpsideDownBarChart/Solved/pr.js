var booksReadThisYear = [17, 23, 20, 34];
var svgHeight = 600;
var svgWeight = 400;
var svg=d3.select("#svg-area")
.append("svg")
.attr("height",svgHeight)
.attr("width",svgWeight)
svg.selectAll("rect")
.data(booksReadThisYear)
.enter()
.append("rect")
.classed("bar","true")
.attr("width",50)
.attr("height",function(data){
    return data*10;
})
.attr("x",function(data,index){
    return index * 70;
});
