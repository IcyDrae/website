import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostsIndex from "../components/Posts/PostsIndex";
import PostDetail from "../components/Posts/PostDetail";
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
    component: PostsIndex
  },
  {
    path: '/posts/:slug',
    name: 'PostDetail',
    component: PostDetail
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
