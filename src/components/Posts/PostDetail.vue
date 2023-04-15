<template>
  <div class="post-detail-wrapper" v-if="post != null">
    <component class="post-body" :is="PostFile"></component>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
import blogService from "@/services/blog";
const { mapGetters } = createNamespacedHelpers("posts");
import { defineAsyncComponent } from 'vue'

export default {
  name: "PostDetail",
  data() {
    return {
      blogService: blogService,
      post: null
    }
  },
  computed: {
    ...mapGetters([
      "getPosts"
    ]),
    PostFile: function() {
      return defineAsyncComponent(() => this.post.component);
    },
    coverImageFile: function() {
      return require(`../../../blog/posts/cover_images/${this.post.metadata.coverImage.fileName}`);
    }
  },
  beforeMount() {
		this.findPost();
  },
	methods: {
		findPost() {
			let uid = this.$route.params.uid;

			this.post = this.getPosts.find(post => post.metadata.slug == uid);
		}
	}
}
</script>
