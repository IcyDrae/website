<template>
  <div class="post-detail-wrapper" v-if="post != null">
    <div class="post-intro">
      <PrismicText class="title" :field="post.data.title" wrapper="h1"/>
      <p class="date">{{ blog.asDate(post.data.written_at) }}</p>
    </div>
    <img :src="post.data.cover_image.url" :alt="post.data.cover_image.alt">
    <PrismicRichText class="post-body" :field="post.data.body"/>
  </div>
</template>

<script>

import blog from "../../services/blog/index";
import { createNamespacedHelpers } from "vuex";
import { PrismicText, PrismicRichText } from '@prismicio/vue';

const { mapGetters } = createNamespacedHelpers("posts");

export default {
  name: "PostDetail",
  components: {
    PrismicText,
    PrismicRichText
  },
  data() {
    return {
      blog: blog,
      post: null,
    }
  },
  computed: {
    ...mapGetters([
        "getPosts"
    ])
  },
  async beforeMount() {
    const setPost = async () => {
      if(this.getPosts.length === 0) {
        let uid = this.$route.params.uid;
        let response = await blog.getPostById(uid);

        this.post = response;
      } else
        this.post = this.getPosts.find(post => post.uid === this.$route.params.uid);
    };

    await setPost();
  }
}
</script>
