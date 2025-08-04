import { createRouter, createWebHistory } from 'vue-router';
import { authRoute } from './auth';
import { transportRoute } from './transportation';
import { homeRoute } from './home';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoute, ...transportRoute, ...homeRoute],
});

export default router;
