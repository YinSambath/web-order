import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import OrderView from  './../views/Order'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./../views/Index')
  },
  {
    path: '/order/:id',
    name: 'order',
    component: OrderView,
  },
]

const router = createRouter({
  history: process.env.NODE_ENV === 'development'
      ? createWebHashHistory(process.env.BASE_URL)
      : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
