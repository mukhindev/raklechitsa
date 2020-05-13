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
  shareShown(state) {
    state.shareShown = true;
  },
  shareHidden(state) {
    state.shareShown = false;
  },
};
