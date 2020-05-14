export const state = () => ({
  quizShown: false,
  shareShown: false,
});

export const mutations = {
  quizOpen(state) {
    state.quizShown = true;
  },
  quizClose(state) {
    state.quizShown = false;
  },
  shareOpen(state) {
    state.shareShown = true;
  },
  shareClose(state) {
    state.shareShown = false;
  },
};
