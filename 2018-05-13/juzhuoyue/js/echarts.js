function hqChart(Data1, Data2) {
	var myChart = echarts.init(document.getElementById('main'));
	var option = {
		color: ['#20C3C0'],
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
				rotate: -25
			}
		},
		yAxis: {
			show: false
		},
		series: [{
			name: '票房排行',
			data: Data1.reverse(),//将数组反转
			//arr.reverse(Data1),
//			Data1.sort(function(x, y) {
//				return y - x   //比较函数两个参数x和y，返回x-y升序，返回y-x降序
//				//return x - y
//			}),
			
			type: 'bar',
			label: {
				normal: {
					show: true,
					formatter: function(value) {
						return Data1[value.data-1]
						//数组角标-1
					}
				}
			}
		}]
	};
	myChart.setOption(option);

}
