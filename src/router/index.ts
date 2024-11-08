/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router/auto';

import VDefaultLayout from '@/layouts/default.vue';
import VHome from '@/pages/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: VDefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        meta: { requiresAuth: true },
        components: {
          default: VHome,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
