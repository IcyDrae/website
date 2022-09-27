import prismic from '../prismic/index';

var provider = prismic,
    providerClient = prismic.client;

const blog = {
    getPosts: () => providerClient.getAllByType("post"),
    getPostById: (id) => providerClient.getByUID("post", id),
    getTags: () => providerClient.getTags(),
    asDate: (date) => provider.asDate(date)
};

export default blog;
