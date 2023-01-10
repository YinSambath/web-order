import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import OrderView from  './../views/OrderView'
import CartView from  './../views/CartView'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./../views/IndexView')
  },
  {
    path: '/order/:id',
    name: 'order',
    component: OrderView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  }
]

const router = createRouter({
  history: process.env.NODE_ENV === 'development'
      ? createWebHashHistory(process.env.BASE_URL)
      : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
