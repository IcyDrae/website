import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from "../components/Posts/Posts";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
