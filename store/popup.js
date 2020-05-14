export const state = () => ({
  quizShown: false,
  shareShown: false,
  yourContactsShown: true,
});

export const mutations = {
  quizOpen(state) {
    state.quizShown = true;
  },
  quizClose(state) {
    state.quizShown = false;
  },
  yourContacts(state) {
    state.yourContacts = true;
  },
  yourContacts(state) {
    state.yourContacts = false;
  },
  shareShown(state) {
    state.shareShown = true;
  },
  shareHidden(state) {
    state.shareShown = false;
  },
};
