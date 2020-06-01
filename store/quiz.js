import fakeData from '../fakeData';

export const state = () => ({
  questions: fakeData.questions || null,
});

export const getters = {
  getQuestions(state) {
    return state.questions;
  },
};
