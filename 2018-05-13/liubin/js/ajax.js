
function Json(jsonUrl, jsonId, JsonType, JsonDataType) {
	$.ajax({
		type: JsonType,
		url: jsonUrl,
		data: {
			appid: jsonId
		},
		dataType: JsonDataType,
		success: function(text) {
			ech1(text);
		}
	});
}
				
	function ech1(text){
			            var A = [];
				        var B = [];
						for(var x = 0; x < text.data.length; x++) {
					A.push(text.data[x].MovieName);//将MoveNaneme存入xA
				B.push(text.data[x].Irank);
		//alert(text.data[1].Irank);
	};
						chart( A , B);
					}
