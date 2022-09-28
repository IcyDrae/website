import prismic from '../prismic/index';

var provider = prismic,
    providerClient = prismic.client;

const blog = {
    getPosts: () => providerClient.getAllByType("post"),
    getPostById: (id) => providerClient.getByUID("post", id),
    getTags: () => providerClient.getTags(),
    asDate: (date) => provider.asDate(date),
    /**
     * Used to display rich text as HTML.
     */
    asHTML: (content) => provider.asHTML(content)
};

export default blog;
