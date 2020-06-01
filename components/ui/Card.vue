<template>
  <li class="card hover-card">
    <a v-if="_blank" :href="link" target="_blank" class="card__item">
      <div class="card__ratio-box">
        <img
          v-if="img"
          :src="img"
          :alt="title || alt"
          :lang="lang"
          class="card__image"
        />
      </div>
      <h3 v-if="title" class="card__title">{{ title }}</h3>
      <p v-if="text" class="card__text">{{ text }}</p>
    </a>
    <nuxt-link v-else :to="link" class="card__item">
      <div class="card__ratio-box">
        <img
          v-if="img"
          :src="img"
          :alt="title || alt"
          :lang="lang"
          class="card__image"
        />
      </div>
      <h3 v-if="title" class="card__title">{{ title }}</h3>
      <p v-if="text" class="card__text">{{ text }}</p>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    img: String,
    alt: String,
    title: String,
    text: String,
    _blank: Boolean,
    lang: String,
  },
};
</script>

<style scoped>
.card__item {
  color: #000;
  text-decoration: none;
}

.card__ratio-box {
  /* Пропорции 1:1 */
  padding-bottom: 100%;
  position: relative;
  z-index: 0;
}

.card__image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.card__title {
  margin: 20px 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .card__title {
    font-size: 18px;
  }
}

.card__text {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  color: #666;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .card__text {
    font-size: 13px;
  }
}
</style>
