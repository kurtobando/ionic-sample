import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TheHome from '@/pages/TheHome.vue'
import TheScrollDownUp from '@/pages/TheScrollDownUp.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/scroll-down-up',
    name: 'ScrollDownUp',
    component: TheScrollDownUp
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
