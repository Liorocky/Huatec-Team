function MovieInit(MovieName, Irank) {
	var myChart = echarts.init(document.getElementById('work'));
	var option = {
	             legend: {
	                 data:['票房排名']
	             },
	             grid: {
	             		y2:100
	             },
	             xAxis: {
	             	 name:'电影名',
	                 data: MovieName,
	                 axisLabel: {
	                 		interval: 0,
	                 		rotate: -30
	                 }
	             },
	             yAxis: {
	             		show:false
	             },
	             series: [{
	                 name: '票房排名',
	                 type: 'bar',
	                 data: Irank,
	                 
	                 label: {
						normal: {
							show: true,
							formatter: function(value) {
								return Irank[value.value-1]
							}
						}
					}
	                 
	             }]
	         };
	         myChart.setOption(option);
}
