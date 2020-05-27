<template>
  <li @click="to" class="card__item hover-card">
    <div class="card__contain-box">
      <img v-if="img" :src="img" :alt="title" class="card__photo" />
    </div>
    <h3 v-if="title" class="card__name">{{ title }}</h3>
    <p v-if="text" class="card__quote">{{ text }}</p>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    img: String,
    title: String,
    text: String,
    _blank: Boolean,
  },
  methods: {
    to() {
      if (this._blank) window.open(this.link, '_blank');
      if (!this._blank) this.$router.push(this.link);
    },
  },
};
</script>

<style scoped>
.card {
  color: #000;
  text-decoration: none;
}

.card__contain-box {
  /* Пропорции 1:1 */
  padding-bottom: 100%;
  position: relative;
  z-index: 0;
}

.card__photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.card__name {
  margin: 20px 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .card__name {
    font-size: 18px;
  }
}

.card__quote {
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
  .card__quote {
    font-size: 13px;
  }
}
</style>
