import axios from 'axios';

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      img: display_url,
      alt: accessibility_caption,
      url: `https://instagram.com/p/${shortcode}`,
    };
  });
};

export const state = () => ({
  instagram: [],
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

export const mutations = {
  setState(state, { name, data }) {
    state[name] = data;
  },
};

export const actions = {
  async fetchInstagram(state) {
    const { data } = await axios.get(
      'https://www.instagram.com/raklechitsa/?__a=1'
    );
    state.commit('setState', { name: 'instagram', data: getPosts(data) });
  },
};
