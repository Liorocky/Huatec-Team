![](https://github.com/felixmzc/Huatec-Team/blob/master/2018-05-13/mazhichao/41.PNG "title")

index.html 代码
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>票房排名</title>
		<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="http://echarts.baidu.com/dist/echarts.js"></script>
		<script src="js/ajax.js"></script>
		<script src="js/echarts.js"></script>
		<script>
			lxJson("http://api.shenjian.io/", "dd648129b0e17057b8901c27f4a88021", "get", "jsonp")
		</script>
	</head>
	<body>
		<div id="lx" style="width: 800px;height: 600px;"></div>
	</body>
</html>
```

ajax.js 代码
```
function lxJson(jsonUrl, jsonId, JsonType, JsonDataType) {
	$.ajax({
		type: JsonType,
		url: jsonUrl,
		data: {
			appid: jsonId
		},
		dataType: JsonDataType,
		success: function(data) {
			lxClean(data);
		}
	});
}

function lxClean(cs) {
	var lxData1 = [];
	var lxData2 = [];
	for(var i = 0; i < cs.data.length; i++) {
		lxData1.splice(i, 0, cs.data[i].Irank);
		lxData2.splice(i, 0, cs.data[i].MovieName);
	};
	lxChart(lxData1, lxData2);
}
```

echarts.js 代码
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
