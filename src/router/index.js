import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/common/Layout'

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// } // ming

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    hidden: true, // 不在导航列表中显示
    redirect: '/login' // 当路由未匹配时重定向，可作初始化显示页面设置
  },
  {
    path: '*',
    hidden: true, // 不在导航列表中显示
    redirect: '/login' // 当路由未匹配时重定向，可作初始化显示页面设置
  },
  {
    path: '/login',
    name: 'login',
    component:Layout,
    // leaf:true,//有二级路由
    meta:{
      title:'login'
    },
    children: [
          {
            path: '/login',
            name: 'login',
            meta: {
              title: 'login'
            },
            component: () =>
              import(
                /* webpackChunkName: "login" */ '../views/Login.vue'
              )
          }
        ]
  },
  {
    path: '/dingwei',
    name: 'dingwei',
    component:Layout,
    // leaf:true,//有二级路由
    meta:{
      title:'dingwei'
    },
    children: [
          {
            path: '/dingwei',
            name: 'dingwei',
            meta: {
              title: 'dingwei'
            },
            component: () =>
              import(
                /* webpackChunkName: "login" */ '../views/Dingwei.vue'
              )
          }
        ]
  },
  {
    path: '/demo',
    name: 'demo',
    component:Layout,
    // leaf:true,//有二级路由
    meta:{
      title:'demo'
    },
    children: [
          {
            path: '/demo',
            name: 'demo',
            meta: {
              title: 'demo'
            },
            component: () =>
              import(
                /* webpackChunkName: "demo" */ '../views/demo.vue'
              )
          }
        ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(from, to)
  next()
})

export default router
