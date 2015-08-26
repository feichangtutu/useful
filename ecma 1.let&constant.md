####let 块级作用域
#####ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
所以let适合用在for循环的生命中；
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

#####let不像var那样，会发生“变量提升”现象。

``function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}``
#####在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。

``if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}``


#####let不允许在相同作用域内，重复声明同一个变量。
不能在函数内部重新声明参数。

#####块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。

// IIFE写法
``(function () {
  var tmp = ...;
  ...
}());``

// 块级作用域写法
``{
  let tmp = ...;
  ...
}``

#####const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。

``const PI = 3.1415;
PI // 3.1415
PI = 3;
PI // 3.1415``
const PI = 3.1;
PI // 3.1415  对常量重新赋值不会报错，只会默默地失败。
const的作用域与let命令相同：只在声明所在的块级作用域内有效。``

``if (true) {
  const MAX = 5;
}``

// 常量MAX在此处不可得

######const命令也不存在提升，只能在声明的位置后面使用。


``const foo = {};
foo.prop = 123;
foo.prop
// 123``

foo = {} // 不起作用
######上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。
不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。

#####如果真的想将对象冻结，应该使用Object.freeze方法。

const foo = Object.freeze({});
foo.prop = 123; // 不起作用
######上面代码中，常量foo指向一个冻结的对象，所以添加新属性不起作用。

#####在javascript中，所有全局变量都是全局对象都属性。
ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；
let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。

`var a = 1;`
// 如果在node环境，可以写成global.a
// 或者采用通用方法，写成this.a
`window.a // 1`

``let b = 1;
window.b // undefined``
####类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
    
    ``let {length : len} = 'hello';</br>
    len //5``















