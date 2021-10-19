var chart = echarts.init(document.getElementById('chart'));
let base = +new Date(2021, 8, 1);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 100]];
for (let i = 1; i < 30; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}
var option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0]-60, '10%'];
        }
    },
    title: {
        left: 'center',
        text: 'Daily New Cases'
    },
    xAxis: {
        type: 'time',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    grid: {
        bottom: '14%',
        right: '8%'
    },
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {
                color: '#f58e6f'
            },
            lineStyle: {
                color: '#ff683a'
            },
            data: data
        }
    ]
};
chart.setOption(option);