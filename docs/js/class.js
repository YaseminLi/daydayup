const methodName = 'getName'
// 相当于构造函数
class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  // 相当于添加在prototype上,
  // 不可枚举
  toString () {
    return '(' + this.x + ', ' + this.y + ')'
  }

  //   在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
  get prop () {
    return 'getter'
  }

  set prop (value) {
    console.log('setter: ' + value)
  }

  // 属性名可以用表达式
  [methodName] () {

  }

  getClassName () {
    return Point.x // Ponit 就是指代Point类，外部不可用
  }
}

// 相当于添加在prototype上,
// 可枚举
Object.assign(Point.prototype, {
  toNumber () {
    return this.x + this.y
  }
})
const p = new Point(5, 6)
console.log(Object.keys(Point.prototype)) // [ 'toNumber' ]
console.log(Object.prototype.hasOwnProperty.call(p, 'x')) // true 通过this添加的才在
console.log(Object.prototype.hasOwnProperty.call(p, 'toString')) // false 不在实例本身上
p.prop = 333 // setter: 333
console.log(Point.name)// "Point"

// 立即执行class
const xiaoming = new class {
  constructor (name) {
    this.name = name
  }

  sayHello () {
    console.log(this.name)
  }
}('xiaoming')
xiaoming.sayHello()
const { sayHello } = xiaoming
sayHello() // error此时的this指向undefined
