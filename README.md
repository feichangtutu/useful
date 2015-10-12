# useful
###1.iconfont系列
####fontawesom 
解决图标问题,引用类名即可
http://fontawesome.io/icons/
特殊字体问题尝试中
####fontello
需要引用 编码
http://fontello.com/
####ali-iconfont
http://www.iconfont.cn/repositories/10
http://www.iconfont.cn/help/iconuse.html
可以自己上传图标，要求svg格式
###2.随机数生成器 random.html
randomCode：生成验证码
2-2 生成随机数 between min and max
###3.calendar
纯DOM生成的calendar插件
###4.ECMAScript 6
http://es6.ruanyifeng.com/#docs/let
一些新特性：
#####(1)let&constant.md
#####(2)变量的解构赋值.md
#####4.3 ecma6字符串的扩展
#####4.4 立即执行函数

### study.pagemaster
关于翻页的，这个不是很清楚。需要更完善的替换。

###5.知识整理还未应用过的css&js
#####5.1 insertAfter
insertBefore(newchild,refchild)
#####5.2 prependChild
prependChild(newNode,parentEle)
#####5.3 getChildTag
getChildren(ele,tag)
#####5.4 对象集合和数组
对象集合不是数组。
对象集合具有时效性，且不能使用push、pop、shift等数组等原生方法，如果使用则需要转化为普通等数组。
#####5.5 为数组原型添加方法
#####5.6 一些css实现
菱形菜单／三角形／清除浮动的方法
#####5.7 一些css兼容问题
###### IE6双边距bug
###### 透明度
IE用filter:Alpha(Opacity=60)
opacity:0.6;
######sIE  a(有href属性)标签嵌套下的img标签，在IE下会带有边框。
######DIV浮动IE文本产生3象素的bug 左边对象浮动
######定义1px左右高度的容器
######ff下，只有body和html同时定义height:100%,高度才为100%。IE下只需要定义body.

###6.prependChild
细节1:nodeName 获取方法  
nodeName 获取到到节点名称为大写字符串。所以判断节点名称时需要 toUpperCase()

###7.popup
弹窗

