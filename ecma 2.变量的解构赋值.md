###ES6允许写成下面这样。

`` var [a, b, c] = [1, 2, 3]; ``
####上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

``
let [x, , y] = [1, 2, 3];``
x // 1
y // 3

``let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]``

####如果解构不成功，变量的值就等于undefined。

``var [foo] = [];
var [foo] = 1;
var [foo] = false;
var [foo] = NaN;
var [bar, foo] = [1];``
####以上几种情况都属于解构不成功，foo的值都会等于undefined。这是因为`原始类型`的值，会自动转为对象，
比如数值1转为new Number(1)，从而导致foo取到undefined。

####如果对undefined或null进行解构，会报错。
这是因为解构只能用于数组或对象。其他原始类型的值都可以转为相应的对象，但是，undefined和null不能转为对象，因此报错.
解构赋值允许指定默认值。

``var [foo = true] = [];
foo // true``

``[x, y='b'] = ['a'] // x='a', y='b'
[x, y='b'] = ['a', undefined] // x='a', y='b' ``

####解构赋值不仅适用于var命令，也适用于let和const命令。
#####对于Set结构，也可以使用数组的解构赋值。

``[a, b, c] = new Set(["a", "b", "c"])
a // "a"``

####只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值.
``function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}``

``var [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5``
###对象的解构赋值
####和数组一样，解构也可以用于嵌套结构的对象。

``var obj = {
     p: [
        "Hello",
        { y: "World" }
    ]
    };``

``var { p: [x, { y }] } = obj;
x // "Hello"
y // "World"``

####对象的解构也可以指定默认值。
``var {x, y = 5} = {x: 1};
    console.log(x, y) // 1, 5``

###类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
    
    ``let {length : len} = 'hello';
    len //5``








