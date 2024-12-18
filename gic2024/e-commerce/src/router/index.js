import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Homeview",
      component: HomeView,
    },
    {
      path: "/categories/:categoryId",
      name: "category",
      component: () => import('@/views/CategoryPage.vue'),
    },
    {
      path: "/products/:productId",
      name: "product",
      component: () => import('@/views/ProductView.vue'),
    }
  ],
})

export default router
