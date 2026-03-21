<template>
  <div class="post-detail-wrapper" v-if="post != null">
    <div class="post-body" v-html="renderedMarkdown"></div>
  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
import MarkdownIt from "markdown-it";
import blogService from "@/services/blog";
const { mapGetters } = createNamespacedHelpers("posts");

const md = new MarkdownIt();

const coverImages = require.context('@/blog/posts/cover_images', false, /\.(png|jpe?g|svg)$/);
const postImages = require.context('@/blog/posts/post_images', false, /\.(png|jpe?g|svg)$/);

export default {
  name: "PostDetail",
  data() {
    return {
      blogService: blogService,
      post: null,
      rawMarkdown: ""
    }
  },
  computed: {
    ...mapGetters([
      "getPosts"
    ]),
    coverImageFile: function() {
      if (!this.post || !this.post.metadata.coverImage) return '';
      return coverImages(`./${this.post.metadata.coverImage.fileName}`);
    },
    renderedMarkdown() {
      if (!this.rawMarkdown) return "";
        const html = md.render(this.rawMarkdown);
        return this.processImages(html);
      }
  },
  beforeMount() {
		this.findPost();
  },
	methods: {
		async findPost() {
			let uid = this.$route.params.uid;

			this.post = this.getPosts.find(post => post.metadata.slug == uid);

      if (this.post) {
        this.rawMarkdown = this.post.content.default || this.post.content;
      }
		},
    processImages(html) {
      // Replace all cover_images paths
      html = html.replace(/src="\.*\/cover_images\/(.*?)"/g, (match, p1) => {
        try {
          return `src="${coverImages(`./${p1}`)}"`;
        } catch {
          return match; // fallback if image not found
        }
      });

      // Replace all post_images paths
      html = html.replace(/src="\.*\/post_images\/(.*?)"/g, (match, p1) => {
        try {
          return `src="${postImages(`./${p1}`)}"`;
        } catch {
          return match; // fallback if image not found
        }
      });

      return html;
    }
	},
}
</script>
