import axios from 'axios';

export const state = () => ({
  videos: [],
});

export const mutations = {
  setState(state, { name, data }) {
    state[name] = data;
  },
};

export const actions = {
  async fetchVideos(state) {
    const { data } = await axios.get(`${process.env.baseUrl}/videos`);
    state.commit('setState', { name: 'videos', data });
  },
};
