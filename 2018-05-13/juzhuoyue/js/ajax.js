function myHq(HqUrl, HqId, HqType, HqDataType) {
	$.ajax({
		type: HqType,
		url: HqUrl,
		data: {
			appid: HqId
		},
		dataType: HqDataType,
	//	beforeSend: function(aaa) {
	//		console.log(aaa);
	//		alert('请求开始啦!!');
			//在请求操作之前
	//	},
		//对该成功获取的数据进行处理
		success: function(data) {
			var hqData1 = [];
			var hqData2 = [];
			for(var i = 0; i < data.data.length; i++) {
				hqData1.splice(i, 0, data.data[i].Irank);
			
			};
			for(var n = 0; n < data.data.length; n++) {
				
				hqData2.splice(n, 0, data.data[n].MovieName);
			};
			hqChart(hqData1, hqData2);
		}
	});
}
