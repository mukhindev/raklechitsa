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
    // FakeData! Подмена значений
    data[2] = { ...data[2], oldValue: 60, currentValue: 80, maxValue: 100 };
    data[3] = { ...data[3], oldValue: 75, currentValue: 55, maxValue: 100 };
    state.commit('setState', { name: 'statistics', data });
  },
};
