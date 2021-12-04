<template>
  <div class="posts-section section">
    <h2><span>Dev Notebook</span></h2>
    <div class="tags-list">
      <div class="tag"
           :class="{ active: tag.active }"
           v-for="(tag, index) in getTags"
           :key="index"
            @click="filterByTag(tag); toggleActiveTag(tag)" >
        {{ tag.name }}
      </div>
    </div>
    <div v-if="getPosts.length !== 0">
      <div class="posts-wrapper">
        <div class="post" v-for="post in posts" :key="post.id">
          <img :src="post.data.cover_image.url" :alt="post.data.cover_image.alt">
          <div class="content-wrapper">
            <p class="date">{{ $prismic.asDate(post.data.written_at) }}</p>
            <p class="title">{{ post.data.title[0].text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Oops ... nothing here yet, try again later!
    </div>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";

const { mapActions, mapGetters } = createNamespacedHelpers("posts");

export default {
  name: "PostsIndex",
  data() {
    return {
      posts: []
    }
  },
  computed: {
    ...mapGetters([
        "getPosts",
        "getTags",
        "getFilteredPosts"
    ])
  },
  methods: {
    ...mapActions([
        "setPosts",
        "setTags",
        "filterPostsBy",
        "toggleActiveTag"
    ]),
    async fetchPosts() {
      if(this.getPosts.length === 0) {
        let response = await this.$prismic.client.getAllByType("post");
        let sorted = this.sortPostsByDate(response);
        this.setPosts(sorted);
      }

      this.posts = this.getPosts;
    },
    async fetchTags() {
      if(this.getTags.length === 0) {
        let response = await this.$prismic.client.getTags();

        this.setTags(response);
      }
    },
    async filterByTag(tag) {
      if(!tag.active) {
        this.filterPostsBy(tag);

        let sorted = this.sortPostsByDate(this.getFilteredPosts);
        this.posts = sorted;
      } else
        this.posts = this.getPosts;
    },
    sortPostsByDate(posts) {
      return posts
          .sort((a, b) => new Date(b.data.written_at) - new Date(a.data.written_at));
    }
  },
  async mounted() {
    await this.fetchPosts();
    await this.fetchTags();
  }
}

</script>
