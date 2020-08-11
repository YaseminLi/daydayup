1. 解释下事件代理。

    当我们需要对很多元素添加事件的时候，可以通过将事件添加到它们的父节点而将事件委托给父节点来触发处理函数。这主要得益于浏览器的事件冒泡机制。


2. 请描述下事件冒泡机制。

    事件捕获、事件目标、事件冒泡三个阶段


3. 解释下 JavaScript 中 this 是如何工作的。

    this 在 JavaScript 中主要由以下五种使用场景。

    ①. 构造函数：this指实例

    ②. 普通函数用：this指window

    ③. 对象属性为函数时：this指对象

    ④. apply，bind，call：this指第一个参数

    ⑤. 箭头函数：创建函数时的作用域
	

4. 解释下原型继承的原理。

    原型继承的基础是原型链查找。 

    ①. 每一个函数 F 都有一个原型对象（prototype）F.prototype

    ②. 每一个函数都可以通过 new 关键字化身成为一个构造函数，new F 会产生一个对象 O

    ③. 在调用对象的某个属性或者方法，比如 O.xxx 的时候，会首先查找对象自身是否有这个方法或者属性，如果没找到就会去对象的构造函数的原型对象中查找（注意有两个定语），也就是查找 O 的构造函数 F 的原型对象 F.prototype.xxx

    ④. F.prototype 也是一个对象，查找 F.prototype.xxx 的时候会重复第 3 步的过程



5. AMD vs. CommonJS？
    - AMD
        1. 异步加载
        2. require.js，全局的define,require函数

    
    - CommonJS
    [参考]( http://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs)
    
        需要具有一个require()用于获取依赖项的函数，一个exports用于导出模块内容
        1. 同步加载
        2. nodejs 规范，被大量用在前端：
            1. 前端开发依赖的插件和库，都可以从npm中获取
            2. 构建工具的高度自动化，使得使用npm的成本非常低
            3. CommonJS不会异步加载JS，而是同步一次性加载出来

```js
var someModule = require('someModule'); // in the vein of node    
exports.doSomethingElse = function() { return someModule.doSomething() + "bar"; };
```


6. 解释下为什么接下来这段代码不是 IIFE(立即调用的函数表达式):```function foo(){ }();```.要做哪些改动使它变成 IIFE?

```（function foo(){ }()）```

7. 描述以下变量的区别：null，undefined 或 undeclared？

    null和undefined为js语言类型，null为一个空对象指针，undeclared为js语法错误。undefined已经声明但没有赋值，undeclared没有声明没有赋值，null为特意设置的空值。
```js
typeof undefined //undefined
Object.prototype.toString(null) //[object NULL]
```
8. 什么是闭包，如何使用它，为什么要使用它？

	①. 什么是闭包？闭包是指有权访问另一个函数作用域中的变量的函数。

	②. 如何使用它？作为函数的返回值；作为参数来传递

	③. 为什么要使用它？访问另一个函数作用域中的变量
		
9. 请举出一个匿名函数的典型用例？

    立即执行函数

10. 请指出 JavaScript 宿主对象和原生对象的区别？

    **宿主**”指的就是网页的运行环境，即“操作系统”和“浏览器”。比如浏览器提供的BOM和DOM都是宿主对象（对于不同的宿主环境所展示的内容不同），它不是 ECMAScript 官方提供的，而是浏览器这个宿主为了方便开发者而加上去的。

    **原生对象**（native object，也称本地对象），其定义为“独立于宿主环境的 ECMAScript实现提供的对象”。即ECMAScript本身带有的一些基本对象，而不包含浏览器等宿主提供的对象。它包含：String、Boolean、Number、Object、Function、Array、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError。

11. 如何实现下列代码？```[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]```
```js
function duplicator(arr) {
    return arr.concat(arr)
}
```
12.  == 和 === 有什么不同？

     ==（相等运算法），===（严格相等运算符） ==值相等，===值相等外类型也要相同。

13. 什么是三元表达式？“三元” 表示什么意思？

    condition ? expr1 : expr2 ，三元表示表达式中的三个元素，条件，真结果，假结果

14. .call 和 .apply 的区别是什么？

    call把参数依次传入,apply把参数打包成数组传入关于javascript中apply()和call()方法的区别

15. 请解释 Function.prototype.bind 的作用？

    创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
```js
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}
var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```
