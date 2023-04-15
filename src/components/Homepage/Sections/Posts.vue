<template>
  <div class="posts-section section">
    <h2 class="section-headline"><span>My latest posts</span></h2>
    <div v-if="posts.length !== 0">
      <div class="posts-wrapper">
        <PostCard v-for="post in posts"
                  :key="post.metadata.slug"
                  :post="post"></PostCard>
      </div>
      <div class="cta-wrapper">
        <router-link :to="{ name: 'Posts' }" class="cta">More posts</router-link>
      </div>
    </div>
    <div v-else>
      Oops ... nothing here yet, try again later!
    </div>
  </div>
</template>

<script>

import PostCard from "@/components/Posts/PostCard.vue";
import blogService from "@/services/blog";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("posts");

export default {
  name: "Posts",
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
	...mapGetters([
    "getPosts"
  ])
  },
  mounted() {
    this.posts = this.getPosts;
		this.posts = blogService.sortByDate(this.posts).slice(0, 4);
  }
}

</script>
