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

###3.calendar
纯DOM生成的calendar插件
###4.ECMAScript 6
http://es6.ruanyifeng.com/#docs/let
一些新特性：
#####let
ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
所以let适合用在for循环的生命中；
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

let不像var那样，会发生“变量提升”现象。

function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}
在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。

if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}