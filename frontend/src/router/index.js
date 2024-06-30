import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TypographyPage from '../views/TypographyPage.vue'
import AccentColorsPage from '../views/AccentColorsPage.vue'
import ComponentsPage from '@/views/ComponentsPage.vue'
import LayoutPage from '@/views/LayoutPage.vue'

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
      path: '/accent-colors',
      name: 'AccentColors',
      component: AccentColorsPage
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsPage
    },
    {
      path:'/layout',
      name: 'Layout',
      component: LayoutPage
    }
  ]
})

export default router
