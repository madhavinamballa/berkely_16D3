function makeResponsive(){
    var svgArea=d3.select("body").select("svg");
    if (!svgArea.empty()){
        svgArea.remove();
    }
    var svgWidth=window.innerWidth;
    var svgHeigth=window.innerHeight;
    var margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      };
    var height = svgHeight - margin.top - margin.bottom;
    var width = svgWidth - margin.left - margin.right;
      //data
    var pizzasEatenByMonth = [15, 5, 25, 18, 12, 22, 0, 4, 15, 10, 21, 2];
    var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    //append svg
    var svg=d3.select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);
    //append svg and group
    var chartGroup=svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    var xScale=d3.scaleLinear()
    .domain([0,pizzasEatenByMonth.length])
    .range([0,width]);
    var yScale=d3.scaleLinear()
    .domain([0,d3.max(pizzasEatenByMonth]))
    .range([height,0]);
    //line generatoe
    var line=d3.line()
    .x((d,i)=>xScale(i))
    .y(d=>yScale(d));
    //create path
    chartGroup
    .append("path")
    .attr("d",line(pizzasEatenByMonth))
    .enter()
    .append("circle")
    .attr("cx",(d,i)=>xScale(i))
    .attr("cy",d=>yScale(d))
    .attr("r","5")
    .attr("fill","red");
    var tooltips=d3.select("body").append("div")
    .attr("class","tooltips");
    //add an onmoiuseover event to display atool tip
    circleGroup.on('mouseover',function(d,i){
        tooltips.style("display","block");
        tooltips.html(`Pizzas eaten:<strong>${pizzasEatenByMonth][i]}</strong>`)
        .style("left",d3.event.pageX+"px")

    })



}