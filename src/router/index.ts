
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloTSX from '../component/HelloTSX';

const RootRoute: RouteRecordRaw = {
    path: '/',
    component: HelloTSX
};

export const constantRouter: RouteRecordRaw[] = [RootRoute];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRouter,
});

export default router;
