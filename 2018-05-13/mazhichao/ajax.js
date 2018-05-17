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
