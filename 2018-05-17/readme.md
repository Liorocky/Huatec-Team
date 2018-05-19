# 参考[首页资料](https://github.com/WarMj/Huatec-Team)，安装MySql，完成相关数据库和表的创建。下载项目并导入，运行测试。
# 任务
## 概述
本次任务需要安装MySql数据库、MySql管理工具、根据需求创建数据库及表。下载项目文件并导入，运行后截图。
## 任务列表
1. 将https://github.com/WarMj/Huatec-Team 这个项目 **pull** 到自己的GitHub中。
2. 进入项目，在`2018-05-17`目录下创建目录，目录名为自己的全部姓名小写拼音，以惠俞淮举例，其目录名为`huiyuhuai`。
3. 安装MySql数据库。（建议安装最新版）
    
    1. 参考安装教程：https://blog.csdn.net/wengengeng/article/details/52013650
    2. 配置参数(必须一样)：
        1. 账号：`root` 密码：`admin`

4. 安装数据库图形化管理工具。建议使用Navicat。
5. 创建数据库和表。

    1. 数据库名：`datadisplay`
    2. 表名：`student`
    3. 字段：
        1. 名：`name` 类型：varchar(255) 是否主键：是
        2. 名：`age` 类型：int(100) 是否主键：否
    4. 随意插入一些值，最终效果参考下图：
    
    ![图片.png](https://upload-images.jianshu.io/upload_images/2864463-307543751705ba4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    
6. 下载这个项目文件：https://github.com/WarMj/datadisplay （注意是下载，不是pull）

    ![图片.png](https://upload-images.jianshu.io/upload_images/2864463-48db0383d782c270.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

7. 将项目导入到自己的GitHub中，参考教程：http://www.cnblogs.com/specter45/p/github.html。

8. 再将项目导入到`Eclipse JavaEE`或`IntelliJ IDEA`中，导入方法自行搜索：`Maven项目导入方法或SSM框架整合`。建议使用`IntelliJ IDEA`，因为今后的教程环境都是它，使用方法自行搜索。

9. 导入成功后，参考下图运行相关服务。(如果运行不成功，说明第8步未完成或有误)

    ![图片.png](https://upload-images.jianshu.io/upload_images/2864463-9b3929bc2494c47b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

10. 运行成功后在浏览器（建议FireFox）中打开下列链接，如果与配图基本显示一致，则任务完成：

    1. http://localhost
    
    ![图片.png](https://upload-images.jianshu.io/upload_images/2864463-ab7dfd7458ac17c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    
    2. http://localhost/student/listStudent
   
    ![图片.png](https://upload-images.jianshu.io/upload_images/2864463-1e48af5a6269a22d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

11. 在自己目录下创建`readme.md`文件，编辑此文件，内容需包含 **自己GitHub项目的连接**、**数据库及表的截图**、**成功运行后的网页截图**。

10. **注意！！** 最后提交时参考下图。 **很多人都是在这步犯错，请检查仔细。**

![注意.png](https://upload-images.jianshu.io/upload_images/2864463-6f01a72f8d759c3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 截至时间 2018年05月21日23时59分