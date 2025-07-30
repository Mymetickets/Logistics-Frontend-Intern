import { createRouter, createWebHistory } from 'vue-router'
import { authRoute } from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoute
  ],
})

export default router
