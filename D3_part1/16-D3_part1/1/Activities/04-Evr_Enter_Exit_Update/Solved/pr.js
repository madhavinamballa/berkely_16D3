var austinTemps = [76];

var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true)
    .merge(selection)
    .style("height", function(d) {
      return d + "px";
    });

selection.exit().remove();