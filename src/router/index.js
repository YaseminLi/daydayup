import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '../components/common/Layout'
// import AppMain from '../components/common/AppMain'
import Gaode from '../views/gaode.vue'
import Baidu from '../views/baidu.vue'

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
    redirect: '/css' // 当路由未匹配时重定向，可作初始化显示页面设置
  },
  {
    path: '/gaode',
    name: 'gaode',
    component: Gaode
  },
  {
    path: '/baidu',
    name: 'baidu',
    component:Baidu
  }
  // {
  //   path: '/table',
  //   name: 'table',
  //   component: () => import(/* webpackChunkName: "table" */ '../components/demo/table.vue')
  // },
  // {
  //   path: '/clock',
  //   name: 'table',
  //   component: () => import(/* webpackChunkName: "clock" */ '../components/demo/clock.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {
  //     title: 'js'
  //     // icon: 'fa fa-paper-plane'
  //   },
  //   component: () => import(/* webpackChunkName: "login" */ '@views/Login')
  // },
  // {
  //   path: '/js',
  //   component: Layout,
  //   name: 'js',
  //   leaf: true,
  //   meta: {
  //     title: 'js'
  //     // icon: 'fa fa-paper-plane'
  //   },
  //   children: [
  //     {
  //       path: '/js/calculate',
  //       name: 'calculate',
  //       meta: {
  //         title: 'calculate'
  //         // icon: 'fa fa-paper-plane'
  //       },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "textShadow" */ '../components/js/calculate'
  //         )
  //     }
  //   ]
  // },
  // {
  //   path: '/css',
  //   component: Layout,
  //   name: 'css',
  //   leafThree: true, // 有三级路由
  //   meta: {
  //     title: 'css'
  //     // icon: 'fa fa-paper-plane'
  //   },
  //   children: [
  //     {
  //       path: '/css/style',
  //       name: 'style',
  //       meta: {
  //         title: 'style'
  //         // icon: 'fa fa-paper-plane'
  //       },
  //       component: AppMain,
  //       leaf: true, // 有二级路由
  //       children: [
  //         {
  //           path: '/css/style/textShadow',
  //           name: 'textShadow',
  //           meta: {
  //             title: 'textShadow'
  //             // icon: 'fa fa-paper-plane'
  //           },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "textShadow" */ '@components/css/TextShadow.vue'
  //             )
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/vue',
  //   component: Layout,
  //   name: 'vue',
  //   leaf: true, // 有二级路由
  //   meta: {
  //     title: 'vue'
  //     // icon: 'fa fa-paper-plane'
  //   },
  //   children: [
  //     {
  //       path: '/vue/navMenu',
  //       name: 'navMenu',
  //       meta: {
  //         title: 'navMenu'
  //         // icon: 'fa fa-paper-plane'
  //       },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "textShadow" */ '../components/vue/NavMenu.vue'
  //         )
  //     },
  //     {
  //       path: '/vue/markdown',
  //       name: 'markdown',
  //       meta: {
  //         title: 'vue中显示markdown文件'
  //         // icon: 'fa fa-paper-plane'
  //       },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "textShadow" */ '../components/vue/markdown'
  //         )
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(from, to)
  next()
})

export default router
