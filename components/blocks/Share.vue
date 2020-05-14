<template>
  <ui-popup header :title="title" titleCenter closeButton="shareClose">
    <div class="share">
      <button
        v-for="link in links"
        :key="link.img"
        class="share__icon"
        :style="`background-image: url('${link.img}')`"
        :title="link.name"
      ></button>
    </div>
  </ui-popup>
</template>

<script>
import UiPopup from '~/components/ui/Popup';

export default {
  components: {
    'ui-popup': UiPopup,
  },
  data() {
    return {
      title: 'Поделитесь',
      links: [
        { name: 'facebook', img: '/images/social/facebook-icon.svg' },
        { name: 'twitter', img: '/images/social/twitter-icon.svg' },
        { name: 'vkontakte', img: '/images/social/vkontakte-icon.svg' },
        { name: 'odnoklassniki', img: '/images/social/odnoklassniki-icon.svg' },
        { name: 'instagram', img: '/images/social/instagram-icon.svg' },
        { name: 'youtube', img: '/images/social/youtube-icon.svg' },
      ],
    };
  },
};
</script>

<style scoped>
.share {
  min-height: 168px; /* За вычетом полей */
  display: flex;
  justify-content: center;
  align-items: center;
}

.share__icon {
  margin-right: 16px;
  border: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  background-color: none;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: 0.25s;
}
.share__icon:focus {
  outline: 1px solid #613a93;
}
.share__icon:last-of-type {
  margin-right: 0;
}
</style>
