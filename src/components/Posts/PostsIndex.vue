<template>
  <div class="posts-section section">
    <h2><span>Dev Notebook</span></h2>
    <div class="tags-list">
      <div class="tag"
           :class="{ active: tag.active }"
           v-for="(tag, index) in tags"
           :key="index"
            @click="filterByTag(tag); toggleTagState(tag)" >
        {{ tag.name }}
      </div>
    </div>
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
    </div>
    <div v-else>
      Oops ... nothing here yet, try again later!
    </div>
  </div>
</template>

<script>

export default {
  name: "PostsIndex",
  data() {
    return {
      posts: [],
      tags: []
    }
  },
  methods: {
    async getPosts() {
      this.posts = await this.$prismic.client.getAllByType("post");
      this.posts = this.sortPostsByDate(this.posts);
    },
    async getTags() {
      let tags = await this.$prismic.client.getTags();

      let self = this;
      const createTagsObjects = function() {
        tags.forEach(tag => {
          self.tags.push({
            name: tag,
            "active": false
          });
        });
      }

      return createTagsObjects();
    },
    async filterByTag(tag) {
      if(!tag.active) {
        this.posts = await this.$prismic.client.getAllByTag([tag.name]);
        this.posts = this.sortPostsByDate(this.posts);
      }
      else
        await this.getPosts();
    },
    toggleTagState(tag) {
      const removeOtherActiveTag = () => {
        let activeTag = this.tags.find(tag => tag.active === true);

        if(activeTag && activeTag.name !== tag.name) {
          activeTag.active = false;
        }
      }

      removeOtherActiveTag();

      tag.active = !tag.active;
    },
    sortPostsByDate(posts) {
      return posts
          .sort((a, b) => new Date(b.data.written_at) - new Date(a.data.written_at));
    }
  },
  mounted() {
    this.getPosts();
    this.getTags();
  }
}

</script>
