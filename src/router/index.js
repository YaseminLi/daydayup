import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
// import Text from '../views/Text.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/css',
    name: 'css',
    children: [
      {
        path: '/style',
        name: 'style',
        children: [
          {
            path: '/textShadow',
            name: 'textShadow',
            component: () =>
              import(
                /* webpackChunkName: "textShadow" */ '../components/css/TextShadow.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/vue',
    name: 'vue',
    children: [
      {
        path: '/navMenu',
        name: 'navMenu',
        component: () =>
          import(
            /* webpackChunkName: "navMenu" */ '../components/vue/NavMenu.vue'
          )
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/text',
  //   name: 'Text',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Text.vue')
  // },
  // {
  //   path: '/menu',
  //   name: 'Menu',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../components/common/Layout.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
