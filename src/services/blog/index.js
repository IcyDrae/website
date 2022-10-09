import prismic from "@/services/prismic";

var provider = prismic,
    providerClient = prismic.client;

const blogService = {
    getPosts: () => providerClient.getAllByType("post"),
    getPostById: (id) => providerClient.getByUID("post", id),
    getTags: () => providerClient.getTags(),
    asDate: (date) => provider.asDate(date),
    /**
     * Used to display rich text as HTML.
     */
    asHTML: (content) => provider.asHTML(content)
};

export default blogService;
