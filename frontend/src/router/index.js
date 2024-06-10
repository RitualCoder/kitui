import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/typography',
      name: 'Typography',
      component: () => import('../views/TypographyPage.vue')
    },
    {
      path:'/accent-colors',
      name: 'AccentColors',
      component: () => import('../views/AccentColorsPage.vue')
    }
  ]
})

export default router
