import axios from "axios";

const url = "http://localhost:5000/api/posts";

const state = {
  posts: []
};

const getters = {
  getPosts: state => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    await axios
      .get(url)
      .then(response => {
        commit("SET_POSTS", response.data);
      })
      .catch(err => {
        throw err;
      });
  }
};

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
