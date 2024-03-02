import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TheScrollDownUp from '@/pages/Tabs/Pages/ScrollDownUp/TheScrollDownUp.vue';
import TheSampleForm from '@/pages/Tabs/Pages/SampleForm/TheSampleForm.vue';
import TheFireBaseAuthenticationLogin from '@/pages/Tabs/Pages/FirebaseAuthentication/TheFireBaseAuthenticationLogin.vue';
import TheTabHome from '@/pages/Tabs/Home/TheTabHome.vue';
import TheTabAbout from '@/pages/Tabs/About/TheTabAbout.vue';
import TheTabPages from '@/pages/Tabs/Pages/TheTabPages.vue';
import TheTabDefault from '@/pages/Tabs/TheTabDefault.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tab',
    },
    {
        path: '/tab',
        component: TheTabDefault,
        children: [
            {
                path: '',
                redirect: '/tab/home',
            },
            {
                path: 'home',
                name: 'TheTabHome',
                component: TheTabHome,
            },
            {
                path: 'about',
                name: 'TheTabAbout',
                component: TheTabAbout,
            },
            {
                path: 'pages',
                name: 'TheTabPages',
                component: TheTabPages,
            },
        ],
    },
    {
        path: '/tab/pages/scroll-down-up',
        name: 'ScrollDownUp',
        component: TheScrollDownUp,
    },
    {
        path: '/tab/pages/sample-form',
        name: 'SampleForm',
        component: TheSampleForm,
    },
    {
        path: '/tab/pages/fire-base-authentication-login',
        name: 'FireBaseAuthenticationLogin',
        component: TheFireBaseAuthenticationLogin,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
