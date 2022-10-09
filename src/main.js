import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import mixins from "@/plugins/mixins";
import blogService from "@/services/blog";

(async function setPostsInStore() {
    let postsInStore = await store.getters["posts/getPosts"];
    let fetchedPosts = blogService.getPosts();

    if (postsInStore.length === 0) {
        store.dispatch("posts/setPosts", fetchedPosts);
    }
})();

createApp(App)
    .use(store)
    .use(router)
    .mixin(mixins)
    .mount('#app')
