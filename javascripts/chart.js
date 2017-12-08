var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
        
    
    },

    colors: [
        
        colors[8],
        colors[3],
        colors[6],
        colors[9],
        colors[0],
        colors[4],

    ],

    title: {
        floating: true,
        align: 'left',
        y: 30,
        text: 'The art of war'
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 50,
        text: ''
    },

    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: [
            '',
            '1988',
            '1989',
            '1990',
            '1991',
            '1992',
            '1993',
            '1994',
            '1995',
            '1996',
            '1997',
            '1998',
            '1999',
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011', 
            '2012'
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    annotations: [{
        labels: [{
            point: {
                x: 11,
                xAxis: 0,
                y: 95,
                yAxis: 0
            },
            text: 'Andres Pastrana<br>begins peace talks<br>with guerillas'
        }, {
            point: {
                x: 13,
                xAxis: 0,
                y: 230,
                yAxis: 0
            },
            text: '"Plan Colombia" wins almost,<br>US$1 billion in mainly military<br>aid from the US'
        }, {
            point: {
                x: 15,
                xAxis: 0,
                y: 24,
                yAxis: 0
            },
            text: '"Pastrana breaks off,<br>three years peace<br>talks with Farc rebels'
            
        }, {
            point: {
                x: 15,
                xAxis: 0,
                y: 20,
                yAxis: 0
            },
            text: 'Farc steps up <br>its campaign <br>of violence'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
         borderColor: 'silver'
        }
    }],
//color de labels
    plotOptions: {
        series: {
            label: {
            minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
        "name": "Combat",
        "data": [
            91, 7,  27, 16, 40, 45, 12, 13, 9,  25, 71, 43, 87, 326,    241,    55, 36, 26, 12, 4,  4,  9,  8,  15, 6
        ]
    }, {
        "name": "Raid",
        "data": [
            19, 29, 63, 31, 13, 4,  39, 13, 58, 143,    110,    141,    49, 45, 1,  4,  0,  3,  2,  0,  3,  3,  1,  0
        ]
    }, {
        "name": "Ambush",
        "data": [
            15, 49, 11, 22, 19, 35, 13, 4,  14, 1,  14, 12, 11, 1,  30, 1,  14, 0,  8,  0,  4,  8,  3,  0
        ]
    }, {
        "name": "Attack to military target",
        "data": [
            33, 29, 2,  16, 2,  9,  6,  41, 6,  18, 9,  20, 37, 116,    11, 1,  6,  27, 4,  0,  0,  4,  15, 10
        ]
    }, {
        "name": "Bombing",
        "data": [
            6,  0,  2,  11, 0,  0,  0,  0,  0,  22, 0,  0,  32, 20, 0,  0,  0,  0,  0,  1,  0,  0,  4,  1,
        ]
    }, {
        "name": "Harrastment",
        "data": [
            0,  0,  1,  1,  0,  0,  0,  0,  0,  4,  0,  0,  0,  2,  0,  0,  0,  1,  6,  0,  0,  2,  0,  0
        ]
    }, ],

    exporting: {
        sourceWidth: 1000,
        sourceHeight: 800
        
    }

});
