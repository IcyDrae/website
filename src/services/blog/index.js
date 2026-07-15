import BlogIndex from "../../blog/index.json";

const mdFiles = require.context("@/blog/posts", false, /\.md$/);

const blogService = {
    getPosts: async function() {
    let posts = [];

    this.getPostsIndex().forEach((post, index) => {
        const filePath = `./${post.fileName}.md`;

        if (!mdFiles.keys().includes(filePath)) {
            console.error("Missing file:", filePath);
            return;
        }

        posts[index] = {
            metadata: post,
            content: mdFiles(filePath)
        };
    });

    return posts;
    },
    getPostsIndex: () => BlogIndex["posts"],
    getPostById: (id) => {},
    getTags: () => BlogIndex["tags"],
    asDate: (date) => date,
    /**
     * @param {Array<Object>} posts 
     * @returns {Array<Object>}
     */
    sortByDate: function(posts) {
        return posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    }
};

export default blogService;
