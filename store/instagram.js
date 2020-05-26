import fakeData from '../fakeData';

export const state = () => ({
  instagram: fakeData.instagram || null,
});

export const getters = {
  getInstagram: state => {
    if (!state.instagram) {
      console.error({ message: 'Не получены данные' });
    } else {
      return state.instagram;
    }
  },
};
