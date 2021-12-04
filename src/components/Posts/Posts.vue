<template>
  <div class="posts-section section">
    <h2><span>My latest posts</span></h2>
    <div v-if="posts.length !== 0">
      <div class="posts-wrapper">
        <div class="post" v-for="post in posts" :key="post.id">
          <img :src="post.data.cover_image.url" :alt="post.data.cover_image.alt">
          <div class="content-wrapper">
            <p class="date">{{ $prismic.asDate(post.data.written_at) }}</p>
            <p class="title">{{ post.data.title[0].text }}</p>
          </div>
        </div>
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

export default {
  name: "Posts",
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
