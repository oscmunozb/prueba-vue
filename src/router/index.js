import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContadorView from '@/views/ContadorView.vue'
import ParentChildView from '@/views/ParentChildView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contador',
      name: 'contador',
      component: ContadorView
    },
    {
      path: '/parent-child',
      name: 'parent-child',
      component: ParentChildView
    }
  ]
})

export default router
