import { createRouter, createWebHistory } from "vue-router"
import Homepage from "@/components/Homepage/Homepage.vue"
import AboutMe from "@/components/Homepage/Sections/AboutMe.vue"
import Technologies from "@/components/Homepage/Sections/Technologies.vue"
import PostsIndex from "@/components/Posts/PostsIndex.vue";
import PostDetail from "@/components/Posts/PostDetail.vue";
import PrivacyPolicy from "@/components/Footer/PrivacyPolicy.vue";
import Attributions from "@/components/Footer/Attributions.vue";

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsIndex
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: Technologies
  },
  {
    path: '/posts/:uid',
    name: 'PostDetail',
    component: PostDetail
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/attributions',
    name: 'Attributions',
    component: Attributions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  }
})

export default router
