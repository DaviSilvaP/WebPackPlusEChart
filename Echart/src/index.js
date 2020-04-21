var echarts = require('echarts');

// initialize echarts instance with prepared DOM
var myChart = echarts.init(document.getElementById('main'));
// draw chart
myChart.setOption({
    title: {
        text: 'Height'
    },
    tooltip: {},
    legend: {
        data:['Steps']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: 'Steps',
        type: 'bar',
        data: []
    }]
});

var step = 0;
// Math.random() * (max - min) + min;
var value = Math.random() * (130 - 50) + 50;
var sequence = parseInt(Math.random() * (5 - 2) + 2);
var dataX = [String(step)];
var dataY = [value];

var myInterval = setInterval(function() {
    
    myChart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dataX
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: dataY,
            type: 'line',
            areaStyle: {}
        }]
    });

    if (dataX.length === 11) {
        dataX.splice(0,1);
        dataY.splice(0,1);
    };

    if (sequence === step) {
        value = Math.random() * (130 - 50) + 50;
        sequence = step + parseInt(Math.random() * (5 - 2) + 2);
    };

    dataX.push(String(step));
    dataY.push(value);

    step += 1;

}, 2000);