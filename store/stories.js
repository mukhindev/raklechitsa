import fakeData from '../fakeData';

export const state = () => ({
  stories: fakeData.stories || null,
});

export const getters = {
  getStories: state => (start, limit) => {
    if (!state.stories) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.stories.slice(start || 0, limit || 8);
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
