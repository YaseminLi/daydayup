### 面对对象编程
将需求封装成一个对象，针对这个对象封装属性和方法，来提高复用性、灵活性、扩展性。

例如在做表单提交时，需要对名字，邮箱验证，如果让我去实现，会写两个单独的方法面向过程的实现方式。
function checkName(){}
function checkEmail(){}
这种就是面向过程实现，会产生很多全局变量

面对对象的话就是进行封装，封装成对象或者类
var checkObject={
    checkName:()
    checkEmail:()
}