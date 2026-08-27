<template>
  <router-link :to="{ name: 'PostDetail', params: { uid: post.metadata.slug } }">
    <div class="post">
      <img v-if="!isMobile()" :src="coverImageFile" :alt="post.metadata.coverImage.Alt">
      <div class="content-wrapper">
        <p class="tag"> {{ post.metadata.tags[0] }} </p>
        <p class="title"
        :data-tooltip="post.metadata.title">
          {{ post.metadata.title }}
        </p>
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
      coverImageFile: require(`../../blog/posts/cover_images/${this.post.metadata.coverImage.fileName}`)
    }
  }
}
</script>
