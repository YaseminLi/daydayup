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
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/text',
    name: 'Text',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Text.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
