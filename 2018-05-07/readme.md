# 参考[首页资料](https://github.com/WarMj/Huatec-Team)，学习Jquery的ajax()方法，完成“实时票房”数据图的制作。
# 任务
## 概述
本次任务需要自学Jquery库中的ajax()方法，动态获取json数据，对获取到的json数据进行清洗，然后将清洗好的数据传给Echarts图表。综合性较强，如果个人无法完成，可多人协同，一起商讨。
json数据样式:[http://api.shenjian.io/?appid=dd648129b0e17057b8901c27f4a88021](http://api.shenjian.io/?appid=dd648129b0e17057b8901c27f4a88021)

## 任务列表
1. 将https://github.com/WarMj/Huatec-Team 这个项目 **pull** 到自己的GitHub中。
2. 进入项目，在`2018-05-07`目录下创建目录，目录名为自己的全部姓名小写拼音，以惠俞淮举例，其目录名为`huiyuhuai`。
3. 编写HTML和JavaScript代码，完成“实时票房”数据图制作。

	![实时票房.png](https://upload-images.jianshu.io/upload_images/2864463-8a8996ed1979c5e4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
	
4. **注意**任务三中图表的票房数据需要**使用ajax()异步请求方法动态获取，不能手动输入。** 图表样式自定义。
5. 可能会用到的ajax()参数：

	1. 请求服务器地址(url)：`http://api.shenjian.io/`。
	2. 传入到服务器的参数为(data)：`appid : "dd648129b0e17057b8901c27f4a88021"`。
	3. 预期服务器返回的数据类型(dataType):`jsonp`。
	4. 请求类型(type):`get`。

6. 由于电影名称过多，可能会出现x轴数据显示不全，解决办法请参考此教程：[echarts x轴坐标文字显示不全](https://blog.csdn.net/wu920604/article/details/53332520)
6. 将所有源代码或工程文件夹上传到任务2中创建的目录下。（此处可使用Git、GitHub PC端、GitHub WEB端、EGit）
7. 在自己目录下创建`readme.md`文件，编辑此文件，内容需包含 **图表的截图**和**以MarkDown代码块格式化的JavaScript代码(不需要HTML代码)**。（此处自学[MarkDown语法](http://wowubuntu.com/markdown/)）
8. **注意！！** 最后提交时参考下图。 **很多人都是在这步犯错，请检查仔细。**
![注意.png](https://upload-images.jianshu.io/upload_images/2864463-6f01a72f8d759c3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 截至时间 2018年05月09日23时59分
