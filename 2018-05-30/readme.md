# 参考[首页资料](https://github.com/WarMj/Huatec-Team)，自行编写接口。
# 任务
## 概述
本次任务需要参考`datadisplay`项目，按照需求自行编写接口，并正常调用。
## 任务列表
1. 将https://github.com/WarMj/Huatec-Team 这个项目 **pull** 到自己的GitHub中。
2. 进入项目，在`2018-05-30`目录下创建目录，目录名为自己的全部姓名小写拼音，以惠俞淮举例，其目录名为`huiyuhuai`。
3. 针对上次任务的接口文件概解
    1. mybatis `mybatis/StudentMapper.xml`
        接口调用的SQL语句。
        
        ![image.png](https://upload-images.jianshu.io/upload_images/2864463-2788fe9e0c9d9a29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    2.Do层 `top.warmj.datadisplay.domain.StudentDO`
        接口返回数据的类型。每个成员变量必须包括`get() set()`方法。
        
        ![image.png](https://upload-images.jianshu.io/upload_images/2864463-26247c48800302d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    3. Dao层 `top.warmj.datadisplay.dao.StudentDao`
        数据访问层。
        
        ![image.png](https://upload-images.jianshu.io/upload_images/2864463-8d814961b9d85ae2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    4. Service层 `top.warmj.datadisplay.services.StudentService` 、 `top.warmj.datadisplay.services.impl.StudentServiceImpl`
        服务层接口及其实现类。
        1. 接口
        ![image.png](https://upload-images.jianshu.io/upload_images/2864463-3b32b62267184045.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
        2. 实现类
        ![image.png](https://upload-images.jianshu.io/upload_images/2864463-13e3de279583f0f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    5. Controller层 `top.warmj.datadisplay.controller.StudentController`
    
        ![image.png](https://upload-images.jianshu.io/upload_images/2864463-7dfc350e439d7113.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    6. 各层具体作用请参考以下文章：
        1. [关于view、controller、service、dao的理解](http://1358440610-qq-com.iteye.com/blog/1871393)
        2. [Java中 VO、PO、DO、DTO、BO、QO、DAO、POJO的概念](https://blog.csdn.net/zhongqi2513/article/details/78940729)
5. 模仿`datadisplay`项目，自行编写接口。参考顺序如下。
    1. 在数据库新建一张表，内容为自行编写需要接口调用的数据。
    2. 编写`Do`类。
    3. 编写`Dao`接口。
    4. 编写`mybatis`文件。
    5. 编写`Service`接口及其实现类。
    6. 编写`Controller`类。
6. 接口文件的存放位置及命名规则请参考下图：
    1. 将所有接口写到`自己的datadisplay中`(注意，所有的接口编写都写在自己的项目中，如没有特殊说明，今后所有的接口都这样写)，并且建议修改包名。（如我的包名是`top.warmj`）
    2. 命名规范为`***Dao`、`***Do`…
    ![image.png](https://upload-images.jianshu.io/upload_images/2864463-49475d80b5826f46.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
7. 将所有的代码`push`到自己的GitHub中。

8. 运行项目，访问自己的接口地址。（接口地址应在`Controller`中，多看看项目中能运行的接口是如何编写的。）
    
9. 在自己目录下创建`readme.md`文件，编辑此文件，内容需包含 **自己的GitHub中`datadisplay`项目的连接**、**新建表的截图**、**项目结构截图**、**成功运行后的网页截图**。

10. **注意！！** 最后提交时参考下图。 **很多人都是在这步犯错，请检查仔细。**

![注意.png](https://upload-images.jianshu.io/upload_images/2864463-6f01a72f8d759c3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 截至时间 2018年06月04日23时59分