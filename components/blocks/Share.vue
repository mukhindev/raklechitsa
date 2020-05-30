<template>
  <ui-popup header :title="popupTitle" titleCenter closeButton="shareClose">
    <div class="share">
      <a
        v-for="link in links"
        :key="link.img"
        class="share__icon"
        :style="`background-image: url('${link.img}')`"
        :title="link.name"
        :href="link.link"
        target="_blank"
      ></a>
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
      popupTitle: 'Поделитесь',
      links: [
        {
          name: 'facebook',
          img: '/images/social/facebook-icon.svg',
          link: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
        },
        {
          name: 'twitter',
          img: '/images/social/twitter-icon.svg',
          link: `https://twitter.com/intent/tweet?text=${
            document.querySelector('title').innerText
          }&url=${encodeURI(window.location.href)}`,
        },
        {
          name: 'vkontakte',
          img: '/images/social/vkontakte-icon.svg',
          link: `https://vk.com/share.php?url=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
        },
        {
          name: 'odnoklassniki',
          img: '/images/social/odnoklassniki-icon.svg',
          link: `https://connect.ok.ru/offer?url=${encodeURI(
            window.location.href
          )}&amp;title=${document.querySelector('title').innerText}`,
        },
        {
          name: 'instagram',
          img: '/images/social/instagram-icon.svg',
          link: 'https://www.instagram.com/raklechitsa/',
        },
        {
          name: 'youtube',
          img: '/images/social/youtube-icon.svg',
          link:
            'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
        },
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
  background-color: transparent;
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
