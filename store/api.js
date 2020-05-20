import fakeData from '../fakeData';

export const state = () => ({
  stories: fakeData.stories || null,
  instagram: fakeData.instagram || null,
  stats: fakeData.stats || null,
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
  getInstagram: state => {
    if (!state.instagram) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.instagram;
    }
  },
  getStats: state => {
    if (!state.stats) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.stats;
    }
  },
};
