
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




export const constantRouter: RouteRecordRaw[] = [RootRoute, BaseRoute];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRouter,
});

export default router;
