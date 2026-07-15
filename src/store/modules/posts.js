
export default {
    namespaced: true,
    state: {
        posts: [],
        filteredPosts: [],
        tags: []
    },
    mutations: {
        setPosts: function(state, payload) {
            state.posts = payload;
        },
        filterPostsBy(state, payload) {
            state.filteredPosts = state.posts.filter(post => post.metadata.tags.some(tag => {
                return tag == payload.name
            }));
        },
        setTags: function(state, payload) {
            payload.forEach(tag => {
                state.tags.push({
                    name: tag,
                    "active": false
                });
            });
        },
        toggleActiveTag(state, payload) {
            const removeOtherActiveTag = () => {
                let activeTag = state.tags.find(tag => tag.active === true);

                if(activeTag && activeTag.name !== payload.name) {
                  activeTag.active = false;
                }
            }

            removeOtherActiveTag();

            payload.active = !payload.active;
        }
    },
    actions: {
        setPosts: function(context, payload) {
            context.commit("setPosts", payload);
        },
        setTags: function(context, payload) {
            context.commit("setTags", payload);
        },
        filterPostsBy: function(context, payload) {
            context.commit("filterPostsBy", payload);
        },
        toggleActiveTag(context, payload) {
            context.commit("toggleActiveTag", payload);
        }
    },
    getters: {
        getPosts: function(state) {
            return state.posts;
        },
        getFilteredPosts: function(state) {
            return state.filteredPosts;
        },
        getTags: function(state) {
            return state.tags;
        }
    }
}
