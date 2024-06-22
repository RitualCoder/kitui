import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TypographyPage from '../views/TypographyPage.vue'
import AccentColorsPage from '../views/AccentColorsPage.vue'
import ResultPage from '../views/ResultPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      
    },
    {
      path: '/typography',
      name: 'Typography',
      component: TypographyPage
    },
    {
      path:'/accent-colors',
      name: 'AccentColors',
      component: AccentColorsPage
    },
    {
      path:'/result',
      name: 'Result',
      component: ResultPage
    }
  ]
})

export default router
