import BlogIndex from "../../../blog/index.json";

const blogService = {
    getPosts: async function() {
        let posts = [];

        await this.getPostsIndex().forEach(async (post, index) => {
            posts[index] = {
                metadata: post,
                component: import(`../../../blog/posts/${post.fileName}.md`)
            };
        });

        return posts;
    },
    getPostsIndex: () => BlogIndex["posts"],
    getPostById: (id) => {},
    getTags: () => BlogIndex["tags"],
    asDate: (date) => new Date(date),
    /**
     * @param {Array<Object>} posts 
     * @returns {Array<Object>}
     */
    sortByDate: function(posts) {
        return posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    }
};

export default blogService;
