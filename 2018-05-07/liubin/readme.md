![](1.PNG)
....
实现代码

		<script>
			function data(text) {
				var xA = [];//定义x轴容器
				var yA = [];//定义y轴容器
			//	var Sx = [];
				for(var a = 0; a < text.data.length; a++) {
					xA.push(text.data[a].MovieName);//将MoveNaneme存入xA
					yA.push(text.data[a].BoxOffice);
					//Sx.push(text.data[a].time);
					{
					//	alert(Sx);
					}
					
				
				}
				var myChart = echarts.init(document.getElementById('p'));
				var option = {
				
					
					title: {
					
						text: '实时票房'
					},
					tooltip: {},
					legend: {
						data: ['金额/万元']
					},
					grid: {
						
						y2: 140
					},
					xAxis: {
						
						data: xA,
						axisLabel: {
							interval: 0,
							rotate: -25
							
						}
					},
					yAxis: {},
					series: [{
					
						name: '金额/万元',
						type: 'bar',
						data: yA,
					}]
				};
				myChart.setOption(option);
			};
			
			
function myJson() {
				$.ajax({
					type: "get",
					url: "http://api.shenjian.io/",
					data: {
						appid: "dd648129b0e17057b8901c27f4a88021"
					},
					dataType: "jsonp",
					success: function(text) {
						data(text)
						//alert(JSON.stringify(text));
						
					}
				});
			};
			myJson();
		</script>

