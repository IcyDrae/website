import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import prismic from "./services/prismic/index";

createApp(App).use(store).use(router).use(prismic).mount('#app')
