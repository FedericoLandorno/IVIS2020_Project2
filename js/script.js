var container_width = window.innerWidth-20;
var container_height = window.innerHeight-30;

$("#container").css("width", container_width);
$("#container").css("height", container_height);

var map = new Datamap({
    element: document.getElementById('container'),
    fills: {
        defaultFill: '#bdbdbd',
        DP: "#f44336",
        FR: "#9c27b0",
        HW: "#3f51b5",
        IM: "#03a9f4",
        IN: "#009688",
        OB: "#8bc34a",
        RF: "#ffc107",
        TR: "#ff5722",
        UN: "#795548"

    },
    data: ""
});

getDataFromJson();

function getDataFromJson(){
    var jstr = "";

    $.getJSON( "data/data.json", function( data ) {  
        /*console.log( "JSON Data: " + data);
        $.each( data, function( key, val ) {
            console.log(key + "value:: " + val );
        });*/
        console.log(data[0]);
    });

    return jstr;
}