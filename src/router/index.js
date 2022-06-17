import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import SingleMovie from '@/components/SingleMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/single/movie/:movieId',
      name: 'SingleMovie',
      component: SingleMovie,
      props: true
    },
    
  ]
})

export default router
