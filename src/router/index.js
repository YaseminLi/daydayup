import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  console.log('location:', location)
  return originalPush.call(this, location).catch(err => err)
}

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
    // leaf:true,//有二级路由
    meta: {
      title: 'login'
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dingwei',
    name: 'dingwei',
    // leaf:true,//有二级路由
    meta: {
      title: 'dingwei'
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Dingwei.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    // leaf:true,//有二级路由
    meta: {
      title: 'demo'
    },
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo.vue')
  },
  {
    path: '/flex',
    name: 'flex',
    // leaf:true,//有二级路由
    meta: {
      title: 'flex'
    },
    component: () => import(/* webpackChunkName: "flex" */ '../views/flex.vue')
  },
  {
    path: '/css',
    name: 'css',
    // leaf:true,//有二级路由
    meta: {
      title: 'css'
    },
    component: () => import(/* webpackChunkName: "css" */ '../views/css.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    // leaf:true,//有二级路由
    meta: {
      title: 'upload'
    },
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/upload.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
