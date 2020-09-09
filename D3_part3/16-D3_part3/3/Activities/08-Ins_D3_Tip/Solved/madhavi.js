function makeResponsive(){
    var svgArea-=d3.select("body").select("svg");
    if(!svgArea.empty()){
        svgArea.remove();
    }
    //defing svg height and width
    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;
    //chart margins
    var margin = {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50
      };
    //chart height and width
    var height = svgHeight - margin.top - margin.bottom;
    var width = svgWidth - margin.left - margin.right;
    //appne svg element
    d3.select(".chart")
    .append("svg")
    .attr("height",svgHeight)
    .attr("width",svgWidth);
    //append group element
    var chartGroup=svg.append("g")
    .attr("transform",`translate(${margin.left},${margin.top})`);
    //read csv
    d3.csv("norway_medals.csv")
    .then(function(medalData){
        var dateParser = d3.timeParse("%d-%b");
        //parse medal data
        medalData.forEach(function(data){
            data.date=dateParser(data.date);
            data.medals = +data.medals;
        });
        //create scalesles
        var xTimeScale=d3.scaleTime()
        .domain(d3.extent(medalData,d=>d.date))
        .range([0,width]);
        var yLinearScale=d3.scaleLinear()
        .domain([0,d3.max(medalData,d=> d.medals)])
        .range([height,0]);
            
        //create axis
        var xAxis=d3.axisBottom(xTimeScale).tickFormat(d3.tickFormat("%d-%b"));
        var yAxis=d3.axisLeft(yLinearScale).ticks(6);
        //append the axis
        chartGroup.append("g")
        .attr("transform",`translate(0,${height})`)
        .call(xAxis);
        chartGroup.append("g")
        .call(yAxis);
        //line generatore
        var line=d3.line()
        .x(d =>xTimeScale(d.date))
        .y(d=>yLinearScale(d.medals));
        //append line
        chartGroup.append("path")
        .data(medalData)
        .attr("d",line)
        .attr("fill"," none")
        .attr("stroke","red");
        //append circlea
        var circlesGroup=chartGroup.selectAll("circle")
        .data(medalData)
        .enter()
        .attr("cx",d=>xTimeScale(d,date))
        .attr("cy",d=>yLinearScale(d,medals))
        .attr("r","10")
        .attr("fill","gold")
        .attr("storke-width","1")
        .attr("stroke","black");
        //dateformatter to display dates
        var dateFormatter=d3.timeFormat("%d-%b");
        //intialise tool tip
        var toolTip=d3.tip()
        .attr("class","tooltip")
        .offset([80,-60])
        .html(function(d){
            return(`<strong>${dateFormatter(d.date)}<strong><hr>${d.medals} medals won `)
        });
        //create toolTip in the chart
        chartGroup.call(toolTip);
        //create mouseover event listenerto display tooltip
        circlesGroup.on("mouseover",function(d){
            toolTip.show(d,this);
        })
        .on("mouseout",function(d){
            toolTip.hide(d)
        });



    });  

}
makeResponsive();
d3.select(window).on("resize",makeResponsive)