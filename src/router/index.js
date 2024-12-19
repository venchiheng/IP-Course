import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import page from '@/views/page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      redirect: '/page/1',
      children: [
        {
          path: "page/:pageNumber",
          name: "page",
          component: page
        }
      ]
    },

  ],
})

export default router
