![](https://github.com/felixmzc/Huatec-Team/blob/master/2018-05-07/mazhichao/3.PNG "title")
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="echarts.js"></script>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:350px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        function myData(text) {
        	var xA = [];
			var yA = [];
			for(var i = 0; i < text.data.length; i++) {
				xA.push(text.data[i].MovieName);
				yA.push(text.data[i].BoxOffice);
			}
        	var myChart = echarts.init(document.getElementById('main'));
        	// 指定图表的配置项和数据
        	var option = {
            	title: {
					show:true,
                	text: '实时票房',
					left:'left',
					borderColor:'red',
					textStyle:{
						fontSize:20
					}
            	},
            	tooltip: {
					trigger:'axis' //可视化
				},
            	legend: {
                	data:['金额/万元']	
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
        // 使用刚指定的配置项和数据显示图表。
        function myJson() {
			$.ajax({
				type: "get",
				url: "http://api.shenjian.io/",
				data: {
					appid: "dd648129b0e17057b8901c27f4a88021"
				},
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
