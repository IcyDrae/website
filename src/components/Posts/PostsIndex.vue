<template>
  <div class="posts-section section">
    <h2 class="section-headline"><span>Dev Handbook</span></h2>
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
        <PostCard v-for="post in posts"
                  :key="post.id"
                  :post="post"></PostCard>
      </div>
    </div>
    <div v-else>
      Oops ... nothing here yet, try again later!
    </div>
  </div>
</template>

<script>

import blog from "../../services/blog/index";

import PostCard from "./PostCard";
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapGetters } = createNamespacedHelpers("posts");

export default {
  name: "PostsIndex",
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
        "getPosts",
        "getTags",
        "getFilteredPosts"
    ])
  },
  async mounted() {
    await this.fetchPosts();
    await this.fetchTags();
  },
  /**
   * Used to disable any active tag.
   *
   * @param to
   * @param from
   * @param next
   */
  beforeRouteLeave(to, from, next) {
    let activeTag = this.getTags.find(tag => tag.active === true);
    if(activeTag)
      this.toggleActiveTag(activeTag);

    next();
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
        let response = await blog.getPosts();
        let sorted = this.sortPostsByDate(response);
        this.setPosts(sorted);
      }

      this.posts = this.getPosts;
    },
    async fetchTags() {
      if(this.getTags.length === 0) {
        let response = await blog.getTags();

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
  }
}

</script>
