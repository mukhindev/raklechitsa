<template>
  <nuxt-link :to="`/stories/${story.id}`" class="stories__link hover-card">
    <li class="stories__card">
      <img
        :src="story.photo"
        :alt="`фото ${story.person}`"
        class="stories__card-photo"
      />
      <h3 class="stories__card-person">{{ story.person }}</h3>
      <p class="stories__card-quote">{{ story.quote }}</p>
    </li>
  </nuxt-link>
</template>

<script>
export default {
  props: ['story'],
};
</script>

<style scoped>
.stories__link {
  color: #000;
  text-decoration: none;
}

.stories__card-photo {
  width: 100%;
  position: relative;
  z-index: 1;
}

.stories__card-person {
  margin: 20px 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .stories__card-person {
    font-size: 18px;
  }
}

.stories__card-quote {
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
  .stories__card-quote {
    font-size: 13px;
  }
}
</style>
