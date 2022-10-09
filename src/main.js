import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import mixins from "@/plugins/mixins";
import blogService from "@/services/blog";

async function persistPosts() {
    let fetchedPosts = await blogService.getPosts();
    let postsInStore = store.getters["posts/getPosts"];

    if (postsInStore.length === 0) {
        let sorted = blogService.sortByDate(fetchedPosts);
        store.dispatch("posts/setPosts", sorted);
    }
};

persistPosts().then(() => {
    createApp(App)
        .use(store)
        .use(router)
        .mixin(mixins)
        .mount('#app');
})
