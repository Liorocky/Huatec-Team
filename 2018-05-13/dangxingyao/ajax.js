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
						myZy(data)
							}
				});
			};
function myZy(text) {
				var x = [];
				var y = [];
			
				for(var i = 0; i < text.data.length; i++) {
					x.push(text.data[i].MovieName);
					y.push(text.data[i].Irank);
					
					
				}
				y.reverse()
				xyecharts(x,y); 
			}