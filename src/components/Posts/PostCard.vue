<template>
  <router-link :to="{ name: 'PostDetail', params: { uid: post.metadata.slug } }">
    <div class="post">
      <img v-if="!isMobile()" :src="coverImageFile" :alt="post.metadata.coverImage.Alt">
      <div class="content-wrapper">
        <p class="date">{{ blogService.asDate(post.metadata.date) }}</p>
        <p class="title">{{ post.metadata.title }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>

import blogService from "@/services/blog";

export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      blogService: blogService,
      coverImageFile: require(`../../../blog/posts/cover_images/${this.post.metadata.coverImage.fileName}`)
    }
  }
}
</script>
