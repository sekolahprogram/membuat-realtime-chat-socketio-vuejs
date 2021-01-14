import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/index.vue')
        },
        {
            path: '/chat',
            name: 'chat',
            component: () => import('./pages/chat.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login.vue')
        },
    ]
})

export default router