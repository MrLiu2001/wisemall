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
    component: Home,
    meta: {
      keepalive: true,
      show: true,
      index: 1
    }
  },
  {
    name: 'Category',
    path: '/category',
    component: () => import('../views/Category/Category'),
    meta: {
      keepalive: true,
      show: true,
      index: 2
    }
  },
  {
    name: 'Shopcart',
    path: '/shopcart',
    component: () => import('../views/Shopcart/Shopcart'),
    meta: {
      keepalive: true,
      show: true,
      index: 3
    }
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('../views/Profile/Profile'),
    meta: {
      keepalive: true,
      show: true,
      index: 4
    }
  },
  {
    name: 'Detail',
    path: '/detail',
    component: () => import('views/Detail/Detail'),
    meta: {
      show: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
