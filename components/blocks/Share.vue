<template>
  <div>
    <overlay>
      <div class="share">
        <p class="share__title">Поделитесь</p>
        <svg
          @click="shareClose"
          class="share__close"
          width="16"
          height="16"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="25.9393"
            x2="25.9393"
            y2="1.93934"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="2.06066"
            y1="1.93934"
            x2="26.0607"
            y2="25.9393"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <div class="share__icons">
          <button
            v-for="link in links"
            class="share__icon"
            :style="`background-image: url('${link.img}')`"
          ></button>
        </div>
      </div>
    </overlay>
  </div>
</template>

<script>
import Overlay from '~/components/ui/Overlay';

export default {
  components: {
    Overlay: Overlay,
  },
  methods: {
    shareClose() {
      this.$store.commit('popup/shareClose');
    },
  },
  data() {
    return {
      links: [
        { name: 'facebook', img: '/images/ui/facebook-icon.svg' },
        { name: 'twitter', img: '/images/ui/twitter-icon.svg' },
        { name: 'vkontakte', img: '/images/ui/vkontakte-icon.svg' },
        { name: 'odnoklassniki', img: '/images/ui/odnoklassniki-icon.svg' },
        { name: 'instagram', img: '/images/ui/instagram-icon.svg' },
        { name: 'youtube', img: '/images/ui/youtube-icon.svg' },
      ],
    };
  },
};
</script>

<style scoped>
.share {
  width: 920px;
  background-color: white;
  z-index: 2;
  padding: 40px 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    ' . title button'
    'social social social';
  grid-row-gap: 100px;
  box-sizing: border-box;
}

.share__title {
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  grid-area: title;
}

.share__close {
  cursor: pointer;
  display: block;
  width: 20px;
  height: 20px;
  justify-self: end;
  align-self: start;
  grid-area: button;
}

.share__icons {
  margin-bottom: 100px;
  grid-area: social;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(6, 48px);
  grid-column-gap: 20px;
}

.share__icon {
  border: 0;
  width: 48px;
  height: 48px;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
@media screen and (max-width: 1280px) {
  .share {
    width: 800px;
  }
}
</style>
