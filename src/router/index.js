import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
<<<<<<< HEAD
      path: '/AnsView/:id',
      name: 'AnsView',
=======
      path: '/ShowView/:id',
      name: 'ShowView',
>>>>>>> 50feaf39c9ce5cc9d1ffe96ea9cb6ddf6e128c77
      props:true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: () => import('../views/AnsView.vue')
    }
=======
      component: () => import('../views/ShowView.vue')
    },
    {
      path:'/AddView',
      name:'AddView',
      component: () => import('../views/AddView.vue')
    },
>>>>>>> 50feaf39c9ce5cc9d1ffe96ea9cb6ddf6e128c77
  ]
})

export default router
