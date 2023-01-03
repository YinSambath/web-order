import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./../views/Index')
  },
//   {
//     path: '/',
//     name: 'index',
//     component: IndexPage,
//     meta: {
//         title: i18n.global.t('platform_name'),
//     }
//   },
]

const router = createRouter({
  history: process.env.NODE_ENV === 'development'
      ? createWebHashHistory(process.env.BASE_URL)
      : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
