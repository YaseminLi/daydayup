### 不存在路由重定向
```js
{
path: '*',
redirect: '/login' // 当路由未匹配时重定向，可作初始化显示页面设置
}
```


### router.beforeEach()

router.beforeEach((to,from,next)=>{})

- to 要进入的路径
- from 要离开的路径
- next 要在花括号里调用来 resolve

适用场景

- 输入不存在的路由，需要重定向(也可以在 routes 数组中添加 path:\*来重定向)
- 判断用户是否登录，没有登录跳转到登录页面
- 根据不同路由配置组件的显示与隐藏
- 用户权限管理 //ming

是先匹配到 routes 列表中的路由，还是先进入到 beforeEach 中？

- 先进入到 beforeEach 中，before 嘛,是进行拦截的

例子：

```js
if (to.path === '/login' || to.path === '/forget') {
  // 根据不同路由配置组件的显示与隐藏
  store.dispatch('menu/hideCommon')
  next()
} else if (from.path === '/login') {
  // 用户是否登录，没有登录跳转到登录页面
  const userId = localStorage.getItem('loginId')
  if (userId) {
    next()
    store.dispatch('menu/showCommon')
  } else {
    next({ path: '/login' })
  }
} else {
  if (from.path === '/') {
    next({ path: '/login' })
  } else {
    next()
    store.dispatch('menu/showCommon')
  }
}
```

vue 项目中使用：

```js
// 路由配置文件中
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from, to)
  next()
})
```

### this.$router.options.routes 
获取router.js中配置的路由对象
