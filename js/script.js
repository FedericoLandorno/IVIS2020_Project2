//https://github.com/markmarkoh/datamaps

//https://syntagmatic.github.io/parallel-coordinates/
//https://github.com/syntagmatic/parallel-coordinates

$(document).ready(function () {
    $('.modal').modal();
});


var container_width = window.innerWidth - 64;
var container_height = window.innerHeight - 64;
$("#container").css("width", container_width);
$("#container").css("height", container_height);
$("#container").css("margin-top", "5px");

var variables_code = ["DP",
    "FR",
    "HW",
    "IM",
    "IN",
    "OB",
    "RF",
    "TR",
    "UN"
];

var variables_names = ["determination perseverance",
    "Feeling of responsibility",
    "Hard work",
    "Imagination",
    "Independence",
    "Obedience",
    "Religious faith",
    "Tolerance and respect for other people",
    "Unselfishness"
];

var fills = {
    defaultFill: '#bdbdbd',
    DP: "#ff5722",
    FR: "#9c27b0",
    HW: "#c62828",
    IM: "#03a9f4",
    IN: "#009688",
    OB: "#8bc34a",
    RF: "#ffc107",
    TR: "#3f51b5",
    UN: "#795548"
};

var dimensions = {
    "Determination perseverance": {
        title: "Det Pers",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Feeling of responsibility": {
        title: "Resp",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Hard work": {
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Imagination": {
        title: "Imag",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Independence": {
        title: "Indep",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Obedience": {
        title: "Obed",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Religious faith": {
        title: "Relig",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Tolerance and respect for other people": {
        title: "Tol Resp",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Unselfishness": {
        title: "Unself",
        type: "number",
        ticks: 11,
        tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    "Wave":
    {
        type: 'string',
        orient: 'right',
        ticks: 4,
        tickValues: ["1995-1999", "2000-2004", "2005-2009", "2010-2014"]
    }
};

$.get('data/trends.txt', function (dt) {
    var datamap = dt;
    var map = new Datamap({
        element: document.getElementById('container'),
        fills: {
            defaultFill: '#bdbdbd',
            DP: "#ff5722",
            FR: "#9c27b0",
            HW: "#c62828",
            IM: "#03a9f4",
            IN: "#009688",
            OB: "#8bc34a",
            RF: "#ffc107",
            TR: "#3f51b5",
            UN: "#795548"

        },
        data: {
            AND: {
                fillKey: 'FR', value: '90.4'
            },
            ALB: {
                fillKey: 'TR', value: '80.55'
            },
            DZA: {
                fillKey: 'RF', value: '70.75'
            },
            AZE: {
                fillKey: 'HW', value: '75.55'
            },
            ARG: {
                fillKey: 'FR', value: '71.39'
            },
            AUS: {
                fillKey: 'TR', value: '86.23'
            },
            ARM: {
                fillKey: 'HW', value: '82.7'
            },
            BGD: {
                fillKey: 'RF', value: '73.9'
            },
            BIH: {
                fillKey: 'FR', value: '73.8'
            },
            BRA: {
                fillKey: 'FR', value: '73.50'
            },
            BLR: {
                fillKey: 'HW', value: '85.8'
            },
            BGR: {
                fillKey: 'HW', value: '89.5'
            },
            CAN: {
                fillKey: 'TR', value: '81.6'
            },
            CHL: {
                fillKey: 'FR', value: '79.42'
            },
            CHN: {
                fillKey: 'HW', value: '79.3'
            },
            TWN: {
                fillKey: 'FR', value: '85.14'
            },
            COL: {
                fillKey: 'FR', value: '80.60'
            },
            HRV: {
                fillKey: 'FR', value: '67.2'
            },
            CYP: {
                fillKey: 'FR', value: '79.25'
            },
            CZE: {
                fillKey: 'HW', value: '78.9'
            },
            COD: {
                fillKey: 'FR', value: '84.4'
            },
            SLV: {
                fillKey: 'RF', value: '67'
            },
            ECU: {
                fillKey: 'FR', value: '75'
            },
            EST: {
                fillKey: 'HW', value: '87.3'
            },
            ETH: {
                fillKey: 'IN', value: '79.2'
            },
            FIN: {
                fillKey: 'FR', value: '88.55'
            },
            FRA: {
                fillKey: 'TR', value: '86.8'
            },
            GEO: {
                fillKey: 'HW', value: '87.56'
            },
            PSE: {
                fillKey: 'RF', value: '76.2'
            },
            DEU: {
                fillKey: 'FR', value: '86.08'
            },
            GHA: {
                fillKey: 'HW', value: '82.3'
            },
            GTM: {
                fillKey: 'FR', value: '63.9'
            },
            HTI: {
                fillKey: 'OB', value: '84.3'
            },
            HKG: {
                fillKey: 'FR', value: '52.844'
            },
            HUN: {
                fillKey: 'FR', value: '84.19'
            },
            IND: {
                fillKey: 'HW', value: '83.1'
            },
            IDN: {
                fillKey: 'RF', value: '91.85'
            },
            IRN: {
                fillKey: 'FR', value: '76.55'
            },
            IRQ: {
                fillKey: 'RF', value: '85.63'
            },
            ISR: {
                fillKey: 'TR', value: '81.9'
            },
            ITA: {
                fillKey: 'FR', value: '87.1'
            },
            JPN: {
                fillKey: 'FR', value: '89.05'
            },
            KAZ: {
                fillKey: 'HW', value: '84.7'
            },
            JOR: {
                fillKey: 'RF', value: '82.56'
            },
            KOR: {
                fillKey: 'FR', value: '89.6'
            },
            KWT: {
                fillKey: 'RF', value: '73.8'
            },
            KGZ: {
                fillKey: 'HW', value: '85.94'
            },
            LVA: {
                fillKey: 'HW', value: '86.4'
            },
            LTU: {
                fillKey: 'HW', value: '88.5'
            },
            LBN: {
                fillKey: 'FR', value: '51.7'
            },
            LBY: {
                fillKey: 'TR', value: '80'
            },
            MYS: {
                fillKey: 'IN', value: '75.2'
            },
            MLI: {
                fillKey: 'HW', value: '72.6'
            },
            MEX: {
                fillKey: 'FR', value: '74.07'
            },
            MDA: {
                fillKey: 'HW', value: '84.67'
            },
            MAR: {
                fillKey: 'RF', value: '78.33'
            },
            NGA: {
                fillKey: 'HW', value: '80.33'
            },
            NLD: {
                fillKey: 'FR', value: '90.35'
            },
            NZL: {
                fillKey: 'TR', value: '81.17'
            },
            NOR: {
                fillKey: 'FR', value: '90.69'
            },
            PAK: {
                fillKey: 'RF', value: '79.87'
            },
            PER: {
                fillKey: 'FR', value: '75.25'
            },
            PHL: {
                fillKey: 'HW', value: '67.10'
            },
            POL: {
                fillKey: 'TR', value: '83'
            },
            PRI: {
                fillKey: 'FR', value: '79.05'
            },
            QAT: {
                fillKey: 'RF', value: '84.7'
            },
            ROU: {
                fillKey: 'HW', value: '74.73'
            },
            RUS: {
                fillKey: 'HW', value: '87.94'
            },
            RWA: {
                fillKey: 'HW', value: '76.15'
            },
            SAU: {
                fillKey: 'RF', value: '70.6'
            },
            SER: {
                fillKey: 'HW', value: '67.5'
            },
            SGP: {
                fillKey: 'FR', value: '76.65'
            },
            VNM: {
                fillKey: 'HW', value: '82.2'
            },
            SVK: {
                fillKey: 'HW', value: '70.3'
            },
            SVN: {
                fillKey: 'IN', value: '80.83'
            },
            ZAF: {
                fillKey: 'HW', value: '68.675'
            },
            ZWE: {
                fillKey: 'HW', value: '80.65'
            },
            ESP: {
                fillKey: 'TR', value: '74.6'
            },
            SWE: {
                fillKey: 'TR', value: '90.875'
            },
            CHE: {
                fillKey: 'FR', value: '78.83'
            },
            THA: {
                fillKey: 'TR', value: '71.1'
            },
            TTO: {
                fillKey: 'RF', value: '72.5'
            },
            TUR: {
                fillKey: 'HW', value: '73.6'
            },
            UGA: {
                fillKey: 'HW', value: '85.6'
            },
            UKR: {
                fillKey: 'HW', value: '81.95'
            },
            MKD: {
                fillKey: 'FR', value: '73.94'
            },
            EGY: {
                fillKey: 'RF', value: '86.83'
            },
            TZA: {
                fillKey: 'TR', value: '83.6'
            },
            USA: {
                fillKey: 'TR', value: '76.15'
            },
            VEN: {
                fillKey: 'FR', value: '80.8'
            },
            SRB: {
                fillKey: 'HW', value: '71.35'
            },
            MNE: {
                fillKey: 'HW', value: '75.05'
            },
            BFA: {
                fillKey: 'HW', value: '80.4'
            },
            URY: {
                fillKey: 'FR', value: '80.8'
            },
            UZB: {
                fillKey: 'HW', value: '92.7'
            },
            YEM: {
                fillKey: 'RF', value: '84.5'
            },
            ZMB: {
                fillKey: 'HW', value: '81.1'
            },
            GBR: {
                fillKey: 'TR', value: '85.5'
            }
        },
        geographyConfig: {
            popupTemplate: function (geo, data) {
                var name = "";
                for (i = 0; i < 9; i++) {
                    if (data.fillKey == variables_code[i]) {
                        name = variables_names[i];
                    }
                }
                return ['<div class="hoverinfo"><strong>',
                    geo.properties.name + "<br>",
                    name,
                    '</strong></div>'].join('');
            },
            highlightFillColor: function (data) {
                if (data.fillKey != null) {
                    var rgb = hexToRgb(fills[data.fillKey]);
                    var rgba = "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.8)";
                    return rgba;
                } else {
                    return "rgba(189, 189, 189, 0.8)";
                }
            },
            highlightBorderColor: 'white',
        },
        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {

                $("#country-name").html("<b>" + geography.properties.name + "</b>");

                //open modal
                var instance = M.Modal.getInstance($("#modal1"));
                instance.open();

                var parcoords = d3.parcoords()("#parcoords")
                    .color(color)
                    .alpha(0.4);

                // load csv file and create the chart
                d3.csv('data/' + geography.id + '.csv', function (data) {
                    parcoords
                        .data(data)
                        .composite("darker")
                        .render()
                        .shadows()
                        .reorderable()
                        .brushMode("1D-axes");  // enable brushing
                });

                parcoords.dimensions(dimensions);

            });
        }

    });

}, 'text');


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var colors = ["#b71c1c", "#2e7d32", "#1a237e", "#4a148c"];


var color = function (d) {
    var color = "#ffffff";
    if (d.Wave == "1995-1999" && d.Imagination != 0) {
        color = colors[0];
    } else if (d.Wave == "2000-2004" && d.Imagination != 0) {
        color = colors[1];
    } else if (d.Wave == "2005-2009" && d.Imagination != 0) {
        color = colors[2];
    } else if (d.Wave == "2010-2014" && d.Imagination != 100 && d.Imagination != 0) {
        color = colors[3];
    }
    return color
};