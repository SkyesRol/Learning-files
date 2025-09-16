import {
    createRouter,
    type RouteRecordRaw,
    createWebHashHistory,

} from 'vue-router'

// 路由的配置数组
const rootRoutes: RouteRecordRaw[] = [

    {
        path: '/home',
        // 路由的懒加载
        component: () => import('@/views/HomePage/HomePage.vue'),
        name: 'home'
    },
    {
        path: '/account',
        component: () => import('@/views/Account/Account.vue'),
        name: 'account'
    },
    {
        path: '/collection',
        component: () => import('@/views/Collection/Collection.vue'),
        name: 'collection'
    },
    {
        path: '/trip',
        component: () => import('@/views/Trip/Trip.vue'),
        name: 'trip'
    },
    {
        path: '/discount',
        component: () => import('@/views/Discount/Discount.vue'),
        name: 'discount'
    },
]

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import('@/views/TheRoot/TheRoot.vue'),
        redirect: '/home',
        children: rootRoutes
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;