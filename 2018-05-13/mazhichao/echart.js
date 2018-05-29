```
function lxChart(Data1, Data2) {
	var myChart = echarts.init(document.getElementById('lx'));
	var option = {
		legend: {
			data: ['票房排行']
		},
		grid: {
			y2: 140
		},
		xAxis: {
			name:'电影名称',
			data: Data2,
			axisLabel: {
				interval: 0,
				rotate: -30
			}
		},
		yAxis: {
			show: false
		},
		series: [{
			data: Data1.sort(function(a, b) {
				return b - a
			}),
			type: 'bar',
			name: '票房排行',
			label: {
				normal: {
					show: true,
					formatter: function(value) {
						return Data1[value.value - 1]
					}
				}
			}
		}]
	};
	myChart.setOption(option);
}
```
