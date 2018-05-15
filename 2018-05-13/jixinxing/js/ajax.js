function topJson(jsonUrl, jsonId, JsonType, JsonDataType) {
	$.ajax({
		type: JsonType,
		url: jsonUrl,
		data: {
			appid: jsonId
		},
		dataType: JsonDataType,
		success: function(data) {
			topClean(data);
		}
	});
}

function topClean(data) {
	var topData1 = [];
	var topData2 = [];
	for(var i = 0; i < data.data.length; i++) {
		topData1.splice(i, 0, data.data[i].Irank);
		topData2.splice(i, 0, data.data[i].MovieName);
	};
	topChart(topData1, topData2);
}
