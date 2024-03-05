
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HelloTSX from '../component/HelloTSX';
import Props from '../component/Base/Props';

const RootRoute: RouteRecordRaw = {
    path: '/',
    component: HelloTSX
};

const BaseRoute: RouteRecordRaw = {
    path: "/base",
    children: [
        {
            path: 'props',
            component: Props
        }
    ]
}


const Public: RouteRecordRaw = {
    path: "/:path(.*)",
    component: () => import('../component/Public/_404')
}


export const constantRouter: RouteRecordRaw[] = [RootRoute, BaseRoute, Public];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRouter,
});

export default router;
