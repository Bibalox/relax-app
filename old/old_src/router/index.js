import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Breathe from '../views/Breathe'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/breathe',
    name: 'Breathe',
    component: Breathe
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
