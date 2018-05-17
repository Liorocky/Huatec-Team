function MovieData() {
	$.ajax({
	        type : "get",
	        async : true, 
	        url : "http://api.shenjian.io/",    
	        data : {
	    	   	appid: "dd648129b0e17057b8901c27f4a88021"
	        },
	        dataType : "jsonp",
	        success : function(IrankData) {
	        	MovieIrankdata(IrankData);
	        }
	 });
}
function MovieIrankdata(IrankData) {
    var MovieName=[];    
    var Irank=[]; 
    for(var Iran = 0;Iran < IrankData.data.length;Iran++){       
    	MovieName.push(IrankData.data[Iran].MovieName);
        Irank.push(12 - IrankData.data[Iran].Irank);                    
    }
    MovieInit(MovieName, Irank);
}
