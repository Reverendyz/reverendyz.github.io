import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'Home',
    },
    {
      path: '/about',
      component: () => import('@/views/AboutView.vue'),
      name: 'About',
    },
    {
      path: '/projects',
      component: () => import('@/views/ProjectsView.vue'),
      name: 'Projects',
    },
    {
      path: '/curriculum',
      component: () => import('@/views/CurriculumView.vue'),
      name: 'Curriculum',
    },
  ],
})

export default router
