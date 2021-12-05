<template>
  <div class="posts-section section">
    <h2 class="section-headline"><span>My latest posts</span></h2>
    <div v-if="posts.length !== 0">
      <div class="posts-wrapper">
        <PostCard v-for="post in posts"
                  :key="post.id"
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

import PostCard from "./PostCard";

export default {
  name: "Posts",
  components: {
    PostCard
  },
  data() {
    return {
      response: []
    }
  },
  methods: {
    async getPosts() {
      this.response = await this.$prismic.client.getAllByType("post");
    }
  },
  computed: {
    /**
     * Filter the first 4 by publication date in descending order.
     *
     * @returns {*[]}
     */
    posts() {
      return this.response
          .slice(0, 4)
          .sort((a, b) => new Date(b.data.written_at) - new Date(a.data.written_at));
    }
  },
  mounted() {
    this.getPosts();
  }
}

</script>
