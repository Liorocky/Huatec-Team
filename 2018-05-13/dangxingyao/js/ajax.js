function Json(url,appid,type,datatype){
	$.ajax({  
           type:type,  
           url: url,
           data: {
		          appid:appid
	              },
           cache : false,   
           dataType: datatype,  
           success: function(data) {
           	var x = [];
				var y = [];
			
				for(var i = 0; i < data.data.length; i++) {
					x.push(data.data[i].MovieName);
					y.push(data.data[i].Irank);
					
					
				}
				y.reverse()
				xyecharts(x,y); 

							}						
				});
		
				
	};