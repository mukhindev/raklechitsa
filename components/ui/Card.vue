<template>
  <nuxt-link :to="link" class="person-card hover-card">
    <li class="person-card__item">
      <div class="person-card__contain-box">
        <img v-if="img" :src="img" :alt="title" class="pperson-card__photo" />
      </div>
      <h3 v-if="title" class="person-card__name">{{ title }}</h3>
      <p v-if="text" class="person-card__quote">{{ text }}</p>
    </li>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: String,
    img: String,
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.person-card {
  color: #000;
  text-decoration: none;
}

.person-card__contain-box {
  /* Пропорции 1:1 */
  padding-bottom: 100%;
  position: relative;
  z-index: 0;
}

.pperson-card__photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.person-card__name {
  margin: 20px 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .person-card__name {
    font-size: 18px;
  }
}

.person-card__quote {
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
  .person-card__quote {
    font-size: 13px;
  }
}
</style>
