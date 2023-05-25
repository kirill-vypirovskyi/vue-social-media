import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../components/UploadPhoto.vue')
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/albums/:albumId',
      name: 'album',
      component: () => import('../components/Album.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
