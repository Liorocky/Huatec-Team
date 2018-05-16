	function chart(A,B){
	var chart = echarts.init(document.getElementById('ech')); 
        var option = {
                            tooltip: {  
                                show: false,  
                            },  
                            legend: {  
                                data:['销量']  
                            },  
              grid: {
			y2: 140
		},
					xAxis: {
						
						data: A,
						axisLabel: {
							interval: 0,
							rotate: -25
							
						}
					},
                           yAxis: {
                           	show:false,
                           },
                       	series: [{
					data:B.sort(function(a, b) 
					
					{
				return b - a
			}),
						name: '销量',
						type: 'bar',
						label: {
				normal: {
					show: true,
					formatter: function(num) {
						return B[num.data - 1]
					}
				}
				}
						
					}]
                       
                       };
     	chart.setOption(option);
        }
