// const checkObj = function () {
//   return {
//     checkName: function () {
//       console.log('checkName')
//       return this
//     },
//     checkEmail: function () {
//       console.log('checkEmail')
//       return this
//     }
//   }
// }

// const a = checkObj()
// a.checkName().checkEmail()
function People (name) {
  this.name = name
}

People.age = 18

People.prototype.addMethod = function (name, fn) {
  this[name] = fn
}

const a = new People('xiaoming')
a.addMethod('sayHello', function () {
  console.log('sayHello,my name is' + this.name)
})
a.sayHello()
