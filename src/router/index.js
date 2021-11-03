import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Crud from '../views/Crud.vue'
import Galeria from '../views/Galeria.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  },
  {
    path: '/crud',
    name: 'Crud',
    component: Crud
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
