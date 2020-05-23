import axios from 'axios';

export const state = () => ({
  statistics: [],
});

export const mutations = {
  setState(state, { name, data }) {
    state[name] = data;
  },
};

export const actions = {
  async fetchStatistics(state) {
    const { data } = await axios.get(`${process.env.baseUrl}/statistics`);
    state.commit('setState', { name: 'statistics', data });
  },
};
