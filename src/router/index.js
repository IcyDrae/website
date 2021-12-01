import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from "../components/Posts/Posts";
import PrivacyPolicy from "../components/Footer/PrivacyPolicy";
import TermsAndConditions from "../components/Footer/TermsAndConditions";

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
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
