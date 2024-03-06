
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HelloTSX from '../component/HelloTSX';
import Props from '../component/Base/Props';
import Emits from '../component/Base/Emits/index.vue';
import SlotsVue from '../component/Base/Slots/index.vue';
import SlotsJSX from '../component/Base/Slots/SlotsJSX.tsx';

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
        },
        {
            path: 'emits',
            component: Emits
        },
        {
            path: 'slots-vue',
            component: SlotsVue
        },
        {
            path: 'slots-jsx',
            component: SlotsJSX
        },
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
