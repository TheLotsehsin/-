import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
// import about from '../views/AboutView.vue'
// import changePwd from '../views/ChangePwd.vue'
// import index from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/changePwd',
    name:'changePwd',
    component:()=> import('../views/ChangePwd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
