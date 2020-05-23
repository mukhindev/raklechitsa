import axios from 'axios';

export const state = () => ({
  blocks: [],
});

export const mutations = {
  setState(state, { name, data }) {
    state[name] = data;
  },
};

export const actions = {
  async fetchBlocks(state) {
    const { data } = await axios.get(`${process.env.baseUrl}/blocks`);
    state.commit('setState', { name: 'blocks', data });
  },
};
