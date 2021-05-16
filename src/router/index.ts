/**
 * 路由配置文件
 */
import * as VueRouter from 'vue-router'

interface Route {
  path: string;
  component: () => Promise<typeof import("*.vue")>;
}

const routes: Route[] = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/home', component: () => import('@/views/Home.vue') },
  { path: '/about', component: () => import('@/views/About.vue') },
]

const router: VueRouter.Router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router