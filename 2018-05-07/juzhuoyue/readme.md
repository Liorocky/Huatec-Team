![Alt text](a.PNG  "optional title")
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>实时票房</title>
		<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="http://echarts.baidu.com/dist/echarts.js"></script>
	</head>

	<body>
		<div id="main" style="width: 700px;height: 500px;"></div>
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
	</body>

</html>
