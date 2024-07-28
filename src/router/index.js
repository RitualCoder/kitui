import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TypographyPage from '../views/TypographyPage.vue'
import AccentColorsPage from '../views/AccentColorsPage.vue'
import ComponentsPage from '@/views/ComponentsPage.vue'
import ColorsPage from '@/views/ColorsPage.vue'
import LayoutPage from '@/views/LayoutPage.vue'
import ResultPage from '@/views/ResultPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/accent-colors',
      name: 'AccentColors',
      component: AccentColorsPage
    },
    {
      path: '/colors',
      name: 'Colors',
      component: ColorsPage
    },
    {
      path: '/typography',
      name: 'Typography',
      component: TypographyPage
    },
    {
      path: '/components',
      name: 'Components',
      component: ComponentsPage
    },
    {
      path: '/layout',
      name: 'Layout',
      component: LayoutPage
    },
    {
      path: '/results',
      name: 'Results',
      component: ResultPage
    }
  ]
})

export default router
