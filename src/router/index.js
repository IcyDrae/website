import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import PostsIndex from "@/components/Posts/PostsIndex.vue";
import PostDetail from "@/components/Posts/PostDetail.vue";
import PrivacyPolicy from "@/components/Footer/PrivacyPolicy.vue";
import Copyright from "@/components/Footer/Copyright.vue";

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
    path: '/copyright',
    name: 'Copyright',
    component: Copyright
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
