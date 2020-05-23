import axios from 'axios';

export const state = () => ({
  stories: [],
});

export const getters = {
  getStories: state => (start, limit) => {
    if (!state.stories) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.stories.slice(start || 0, start + limit || start + 8 || 8);
    }
  },
  getStoryById: state => id => {
    if (!state.stories) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.stories.find(el => el.id === Number(id));
    }
  },
  getNumberOfStories: state => {
    if (!state.stories) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.stories.length;
    }
  },
};

export const mutations = {
  setState(state, { name, data }) {
    state[name] = data;
  },
};

export const actions = {
  async fetchStories(state) {
    const { data } = await axios.get(`${process.env.baseUrl}/stories`);
    state.commit('setState', { name: 'stories', data });
  },
};
