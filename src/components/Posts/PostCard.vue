<template>
  <router-link :to="{ name: 'PostDetail', params: { uid: post.uid } }">
    <div class="post">
      <img v-if="!isMobile()" :src="post.data.cover_image.url" :alt="post.data.cover_image.alt">
      <div class="content-wrapper">
        <p class="date">{{ $prismic.asDate(post.data.written_at) }}</p>
        <p class="title">{{ post.data.title[0].text }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
