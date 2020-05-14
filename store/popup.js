export const state = () => ({
  quizShown: false,
  shareShown: false,
  yourContactsShown: false,
});

export const mutations = {
  quizOpen(state) {
    state.quizShown = true;
  },
  quizClose(state) {
    state.quizShown = false;
  },
  yourContactsOpen(state) {
    state.yourContactsShown = true;
  },
  yourContactsClose(state) {
    state.yourContactsShown = false;
  },
  shareShown(state) {
    state.shareShown = true;
  },
  shareHidden(state) {
    state.shareShown = false;
  },
};
