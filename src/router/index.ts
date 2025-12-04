import HomeComponent from '@/views/HomeComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeComponent,
      name: 'Home',
    },
  ],
})

export default router
