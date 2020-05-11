export const state = () => ({
  quizShown: false,
});

export const mutations = {
  quizOpen(state) {
    state.quizShown = true;
  },
  quizClose(state) {
    state.quizShown = false;
  },
};
