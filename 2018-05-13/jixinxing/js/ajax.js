$.ajax({
	type: "get",
	url: "http://api.shenjian.io/",
	data: {
		appid: "dd648129b0e17057b8901c27f4a88021"
	},
	dataType: "jsonp",
	success: function(data) {
		topClean(data);
	}
});

function topClean(data) {
	var topData1 = [];
	var topData2 = [];
	for(var i = 0; i < data.data.length; i++) {
		topData1.splice(i, 0, data.data[i].Irank);
		topData2.splice(i, 0, data.data[i].MovieName);
	};
	topChart(topData1, topData2);
}