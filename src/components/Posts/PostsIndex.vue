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
                  :key="post.metadata.slug"
                  :post="post"></PostCard>
      </div>
    </div>
    <div v-else>
      Oops ... nothing here yet, try again later!
    </div>
  </div>
</template>

<script>

import blogService from "@/services/blog";
import PostCard from "@/components/Posts/PostCard.vue";
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
    this.posts = this.getPosts;
    this.fetchTags();
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

    if (activeTag)
      this.toggleActiveTag(activeTag);

    next();
  },
  methods: {
    ...mapActions([
        "setTags",
        "filterPostsBy",
        "toggleActiveTag"
    ]),
    fetchTags() {
      if(this.getTags.length === 0) {
        this.setTags(blogService.getTags());
      }
    },
    async filterByTag(tag) {
      if(!tag.active) {
        this.filterPostsBy(tag);

        let sorted = blogService.sortByDate(this.getFilteredPosts);
        this.posts = sorted;
      } else
        this.posts = this.getPosts;
    }
  }
}

</script>
