/**
 * 路由配置文件
 */
import * as VueRouter from 'vue-router'

import { ErrorRoutes } from './error'
import config from '../constant/config'

const baseRoutes: VueRouter.RouteRecordRaw[] = [
  { path: '', component: () => import('@/views/Home.vue') },
  { path: '/', redirect: '' },
  { path: '/home', component: () => import('@/views/Home.vue') },
  { path: '/about', component: () => import('@/views/About.vue') },
]

const router: VueRouter.Router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(config.routeBase),
  
  routes: [
    ...baseRoutes,
    ...ErrorRoutes
  ]
})

export default router