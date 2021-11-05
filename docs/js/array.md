特殊的对象
```js
typeof [1,2,3];//object
Object.keys(arr);// ["0", "1", "2"]
```
位置即键名，数值会自动转化成字符串

```js

清空数组
arr=[]
arr.length=0;

length属性大于数组个数时，空位为undefined


位置即键名，数值会自动转化成字符串
var arr=[];
arr[-1]='a';
arr[Math.pow(2,32)]='b';
arr;//[-1: 'a', 4294967296: 'b']
arr.length;//0
arr[-1];//a
arr[4294967296];//b

in 运算符 检查某个键名是否存在于数组、对象,位置为空位时，返回false
var arr=[1,2,3];
2  in arr;//true
4  in arr;//false

 delete arr[1];//删除某一项
 const arr=[1,2,3]
 delete arr[1]
 arr;//[1,empty,3]
 arr.length;//3

forEach\for in\object.keys,遍历时，空位会被跳过；undefined时不会被跳过

类似数组的对象：
如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。
var obj={
    1:q,
    2:w,
    3:e,
    length:3
};
obj.push("d");//报错，没有push属性
length属性不是动态的，不会随着成员的变化而变化

arguments,DOM元素，字符串
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

// 字符串
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false

类似数组的对象转化为真的数组：
var arr=Array.prototype.slice.call(arrayLike);

```
