![Alt text](a.PNG  "optional title")


js代码如下

	```	
		<script>
			function myData(text) {
				var xA = [];
				var yA = [];
				for(var i = 0; i < text.data.length; i++) {
					xA.push(text.data[i].MovieName);
					yA.push(text.data[i].BoxOffice);
				}
				var myChart = echarts.init(document.getElementById('main'));
				var option = {
					color: ['#FFFF00'],
					title: {
						text: '实时票房',
					},
					tooltip: {},
					legend: {
						data: ['金额/万元']
					},
					grid: {
						y2: 150   //调整显示y轴的具体长度
					},
					xAxis: {
						data: xA,
						axisLabel: {
							interval: 0,//横轴信息全部显示
							rotate: -30//-30度角倾斜显示
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
					data: {appid: "dd648129b0e17057b8901c27f4a88021"},
					dataType: "jsonp",
					success: function(data) {
						myData(data)
					}
					
				});
			};
			myJson();
		</script>    
		```
