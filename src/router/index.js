import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import OrderView from  './../views/OrderView'
import CartView from  './../views/CartView'
import AddressInfoView from  './../views/AddressInfoView'
import ConfirmOrderView from  './../views/ConfirmOrderView'
const routes = [
  { path: '/', name: 'index', component: () => import('./../views/IndexView') },
  { path: '/product/:id', name: 'product', component: OrderView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/addressInfo', name: 'addressInfo', component: AddressInfoView },
  { path: '/confirmOrder', name: 'confirmOrder', component: ConfirmOrderView },
]

const router = createRouter({
  history: process.env.NODE_ENV === 'development'
      ? createWebHashHistory(process.env.VUE_APP_BASE_URL)
      : createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
