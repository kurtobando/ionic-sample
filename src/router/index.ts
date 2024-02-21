import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TheHome from '@/pages/TheHome.vue';
import TheScrollDownUp from '@/pages/TheScrollDownUp.vue';
import TheSampleForm from '@/pages/TheSampleForm.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: TheHome,
    },
    {
        path: '/scroll-down-up',
        name: 'ScrollDownUp',
        component: TheScrollDownUp,
    },
    {
        path: '/sample-form',
        name: 'SampleForm',
        component: TheSampleForm,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
