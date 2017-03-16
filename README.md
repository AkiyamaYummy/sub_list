# sub_list  
Some JavaScript functions which can show a collapsible list in the webpage.  
  
主要目的是练习js，和这个相比，上个文档里生成子列表的方法就显得弱鸡了一些。  
这个也算是个模板吧。我真的很想知道，真正的前端程序员用什么方法来达成这样的子列表的效果。  
_init()函数的四个参数依次是：(1)pr 想在里面塞上列表的目标对象。  
(2)Arr 整数数组，若Arr[m]=n，则表示标号为m的<li>有一个标号为n的父<li>。  
(3)str_arr 字符串数组，str_arr[n]="yum"表示标号为n的<li>的内容为"yum"。  
(4)sty 表示列表的style。  
  
如：  
```
<body id="_body" onload=
"_init(_body,[-1,-1,-1,0,0,0,1,1,2,8]  
,['0:my father is null'  
,'1:my fatheris null'  
,'2:my father is null'  
,'3:my father is 0'  
,'4:my father is 0'  
,'5:my father is 0'  
,'6:my father is 1'  
,'7:my father is 1'  
,'8:my father is 2',  
'9:my father is 8']  
,'color:red;background:black')">  
 ```
 这段代码，将body的id命名为_body并调用了_init()函数，在body中添加了一个含有子列表的，前景颜色为红色，背景色为黑色的列表，执行效果如下：  
![](http://thumbnail0.baidupcs.com/thumbnail/78903f4a58269a1653e5af9fa8f0b8f9?fid=3305955985-250528-381983680367098&time=1489654800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-H9i0baWZfRcCCcUtCOX6xjqsucY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=1732899137825635774&dp-callid=0&size=c10000_u10000&quality=90)
  
![](http://thumbnail0.baidupcs.com/thumbnail/95bded8a2970d17508f774eeabef4524?fid=3305955985-250528-1021512820744395&time=1489654800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iJnFbthx%2bq4l0GZCrsHyzeF4GAc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=1732899137825635774&dp-callid=0&size=c10000_u10000&quality=90)
