// import { createRouter, createWebHashHistory } from 'vue-router' // hash导入
import { createRouter, createWebHistory } from 'vue-router' // history 导入

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    // redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ],
    component: () => import('@/views/layout')
  }
]

const router = createRouter({
  // history: createWebHashHistory(), // hash初始化
  history: createWebHistory(process.env.BASE_URL), // history初始化
  mode: 'history',
  base: '',
  routes
})

export default router
