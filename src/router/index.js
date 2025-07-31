import { createRouter, createWebHistory } from 'vue-router';
import { authRoute } from './auth';
import { transportRoute } from './transportation';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoute, ...transportRoute],
});

export default router;
