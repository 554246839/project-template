/**
 * 错误路由表
 */
import * as VueRouter from 'vue-router'

export const ErrorRoutes: VueRouter.RouteRecordRaw[] = [
  { path: '/401', component: () => import('@/views/errorPages/401.vue') },
  { path: '/403', component: () => import('@/views/errorPages/403.vue') },
  { path: '/404', component: () => import('@/views/errorPages/404.vue') },
  { path: '/405', component: () => import('@/views/errorPages/405.vue') },
  { path: '/500', component: () => import('@/views/errorPages/500.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/errorPages/404.vue') } // 所有404页面
]
