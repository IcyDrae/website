import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import prismic from "./services/prismic/index";
import mixins from "./plugins/mixins";

createApp(App)
    .use(store)
    .use(router)
    .use(prismic)
    .mixin(mixins)
    .mount('#app')
