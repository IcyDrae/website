<template>
  <div class="posts-section section">
    <h2><span>My latest posts</span></h2>
    <div v-if="documents.length !== 0">
      <div class="posts-wrapper">
        <div class="post" v-for="document in documents" :key="document.id">
          <img :src="document.data.cover_image.url" :alt="document.data.cover_image.alt">
          <div class="content-wrapper">
            <p class="date">{{ $prismic.asDate(document.first_publication_date) }}</p>
            <p class="title">{{ document.data.title[0].text }}</p>
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
    async getContent() {
      this.response = await this.$prismic.client.getAllByType("post");
    }
  },
  computed: {
    /**
     * Filter the first 4 by publication date in descending order.
     *
     * @returns {*[]}
     */
    documents() {
      return this.response
          .slice(0, 4)
          .sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date));
    }
  },
  mounted() {
    this.getContent();
  }
}

</script>
