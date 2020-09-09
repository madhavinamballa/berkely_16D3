var complexData=[
    {
        title:"javascript",
        url:"https://media.giphy.com/media/10bdAP4IOmoN7G/giphy.gif"

    },
    {
        title: "python",
        url: "https://media.giphy.com/media/2yP1jNgjNAkvu/giphy.gif"
    },
    {
        title: "css",
        url: "https://media.giphy.com/media/TsxMkIKHpvFaU/giphy.gif"
    }
];
d3.select(".img-gallery").selectAll("div")
.data(complexData)
.enter()
.append("div")
.classed("col-md-4 thumbnail",true)
.html(function(d){
    return `<img src="${d.url}">`;
});