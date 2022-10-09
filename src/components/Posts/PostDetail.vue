<template>
  <div class="post-detail-wrapper" v-if="post != null">
    <div class="post-intro">
      <h1 class="title">{{ post.data.title[0].text }}</h1>
      <p class="date">{{ blogService.asDate(post.data.written_at) }}</p>
    </div>
    <img :src="post.data.cover_image.url" :alt="post.data.cover_image.alt">
    <div class="post-body" v-html="blogService.asHTML(post.data.body)"></div>
  </div>
</template>

<script>

import blogService from "@/services/blog";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("posts");

export default {
  name: "PostDetail",
  data() {
    return {
      blogService: blogService,
      post: null,
    }
  },
  computed: {
    ...mapGetters([
        "getPosts"
    ])
  },
  async beforeMount() {
		await this.findPost();
  },
	methods: {
		async findPost() {
			let uid = this.$route.params.uid;
			let postsInStore = await this.getPosts;

			this.post = postsInStore.find(post => post.uid == uid);
		}
	}
}
</script>
