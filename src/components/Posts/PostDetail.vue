<template>
  <div class="post-detail-wrapper">
    <div class="post-intro">
      <PrismicText class="title" :field="post.data.title" wrapper="h1"/>
      <p class="date">{{ $prismic.asDate(post.data.written_at) }}</p>
    </div>
    <img :src="post.data.cover_image.url" :alt="post.data.cover_image.alt">
    <PrismicRichText class="post-body" :field="post.data.body"/>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("posts");

export default {
  name: "PostDetail",
  computed: {
    ...mapGetters([
        "getPosts"
    ]),
    post: function() {
      return this.getPosts.find(post => post.id === this.$route.params.id);
    }
  },
  mounted() {
  }
}
</script>
