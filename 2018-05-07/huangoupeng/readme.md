![](3.PNG)




**js代码：**
```
 <script type="text/javascript">
        
        var myChart = echarts.init(document.getElementById('main'));
         // 显示标题，图例和空的坐标轴
         myChart.setOption({
             title: {
                 text: '异步数据加载示例'
             },
             tooltip: {},
             legend: {
                 data:['实时票房']
             },
             grid: {
             		y2:140
             },
             xAxis: {
             	 name:'电影',
                 data: [],
                 axisLabel: {
                 		interval: 0,
                 		rotate: -25
                 }
             },
             yAxis: {
             		type:'value',
					name:'金额/万元'
             },
             series: [{
                 name: '实时票房',
                 type: 'bar',
                 data: []
             }]
         });
         
         myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
         
         var names=[];    //类别数组（实际用来盛放X轴坐标值）
         var nums=[];    //销量数组（实际用来盛放Y坐标值）
         
         $.ajax({
         type : "get",
         async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
         url : "http://api.shenjian.io/",    //请求发送到TestServlet处
         data : {
         	appid: "dd648129b0e17057b8901c27f4a88021"
         },
         dataType : "jsonp",        //返回数据形式为json
         success : function(result) {
             //请求成功时执行该函数内容，result即为服务器返回的json对象
             if (result) {
                    for(var i=0;i<result.data.length;i++){       
                       names.push(result.data[i].MovieName);    //挨个取出类别并填入类别数组
                     }
                    for(var i=0;i<result.data.length;i++){       
                        nums.push(result.data[i].BoxOffice);    //挨个取出销量并填入销量数组
                      }
                    myChart.hideLoading();    //隐藏加载动画
                    myChart.setOption({        //加载数据图表
                        xAxis: {
                            data: names
                        },
                        series: [{
                            // 根据名字对应到相应的系列
                            name: '实时票房',
                            data: nums
                        }]
                    });
                    
             }
         
        },
         error : function(errorMsg) {
             //请求失败时执行该函数
         alert("图表请求数据失败!");
         myChart.hideLoading();
         }
         
    })

         
    </script>
   


 ```
