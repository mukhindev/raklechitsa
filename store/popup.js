export const state = () => ({
  popupShown: false,
});

export const mutations = {
  popupOpen(state) {
    state.popupShown = true;
  },
  popupClose(state) {
    state.popupShown = false;
  },
};
