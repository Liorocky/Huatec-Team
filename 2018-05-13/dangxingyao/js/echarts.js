function xyecharts(x,y){
			var myChart = echarts.init(document.getElementById('DXY'));
				var option = {
					title: {
						text: '实时票房'
					},
					color: ['#3398DB'],
// 					tooltip : {
//  				 trigger: 'axis',
//   					axisPointer : {      // 坐标轴指示器，坐标轴触发有效
//    					 type : 'shadow'    // 默认为直线，可选为：'line' | 'shadow'
//  							 		}
//								 },
   					grid: {
    				 left: '3%',
    				 right: '4%',
    				 bottom: '3%',
     					containLabel: true
  						 },
					xAxis: {
						data: x,
						axisLabel: {
							interval: 0,
							rotate: -25
						}
					},
					yAxis: {
						 show: false,
					},
					series: [{
						name: '金额/万元',
						type: 'bar',
						data: y,
						label: {
                                	normal: {
                                		show: true,
											formatter: function(vale) {
											 return y[vale.data-1]
												}
                                			
                                		
                                	}
                                		
                             
                                }
					}]
				};
				
		myChart.setOption(option);		
}

