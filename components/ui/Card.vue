<template>
  <nuxt-link :to="link" class="card__link hover-card">
    <li class="card__card">
      <div class="card__contain-box">
        <img v-if="img" :src="img" :alt="title" class="card__card-photo" />
      </div>
      <h3 v-if="title" class="card__card-person">{{ title }}</h3>
      <p v-if="text" class="card__card-quote">{{ text }}</p>
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
.card__link {
  color: #000;
  text-decoration: none;
}

.card__contain-box {
  /* Пропорции 1:1 */
  padding-bottom: 100%;
  position: relative;
  z-index: 0;
}

.card__card-photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.card__card-person {
  margin: 20px 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .card__card-person {
    font-size: 18px;
  }
}

.card__card-quote {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
  color: #666666;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .card__card-quote {
    font-size: 13px;
  }
}
</style>
