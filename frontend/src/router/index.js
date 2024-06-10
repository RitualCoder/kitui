import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TypographyPage from '../views/TypographyPage.vue'

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
      component: TypographyPage
    },
    {
      path:'/accent-colors',
      name: 'AccentColors',
      component: () => import('../views/AccentColorsPage.vue')
    }
  ]
})

export default router
