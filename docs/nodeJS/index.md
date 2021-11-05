## npm包管理

## [事件循环](http://nodejs.cn/learn/the-nodejs-event-loop)
- 调用堆栈，顺序执行

- 消息队列：setTimeout,定时器到期后会将setTimeout中要执行的函数放入消息队列中，事件循环处理完所有调用堆栈中的内容后，处理消息队列。setTimeout的等待位于自身的线程中

- ES6作业队列：promise的resolve,在当前函数结束后立即执行，而不是调用堆栈结束后（setTimeout中内容执行后）
  
- process.nextTick() 在当前事件循环的最后执行。与promise resolve的先后？

- setImmediate 在事件循环的下一个迭代中执行的回调。

```
<!-- setImmediate() 与 setTimeout(() => {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同？

传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。 -->
```

```js
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()
// foo
// baz
// 应该在 baz 之后、bar 之前
// bar
```