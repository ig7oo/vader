import ForecastView from '@/views/ForecastView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ForecastView,
    },
    /*        {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
*/
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/LocationsView.vue')
    }
  ],
})

export default router