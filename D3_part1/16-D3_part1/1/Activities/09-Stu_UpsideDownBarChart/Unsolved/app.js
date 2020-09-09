// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];
//var booksReadThisYear = [17];
var svgheight=600;
var svgweight=400;
// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE
var svg = d3.select("#svg-area")
            .append("svg")
            .attr("height",svgheight)
            .attr("width",svgweight);
svg.selectAll("rect")
.classed("bar",true)
.data(booksReadThisYear)
.attr("width",50)
.attr("height",function(d){
    return d*10;
})
.attr("x",function(d,index){
    return index*60;
})
.attr("y",0);
// Vertical Bar Chart
// YOUR CODE HER

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
