import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Category',
    path: '/category',
    component: () => import('../views/Category/Category')
  },
  {
    name: 'Shopcart',
    path: '/shopcart',
    component: () => import('../views/Shopcart/Shopcart')
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('../views/Profile/Profile')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
