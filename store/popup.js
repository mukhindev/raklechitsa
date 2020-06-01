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
  shareOpen(state) {
    state.shareShown = true;
  },
  shareClose(state) {
    state.shareShown = false;
  },
};
