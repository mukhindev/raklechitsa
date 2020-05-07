<template>
  <nuxt-link :to="`/stories/{}`" class="stories__link">
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
  transition: transform 0.25s;
  position: relative;
}

.stories__link:hover {
  transform: scale(1.05);
}

.stories__link::after {
  content: '';
  display: block;
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  box-shadow: 0 0 0px rgb(170, 170, 170);
  transition: box-shadow 0.25s;
}

.stories__link:hover::after {
  box-shadow: 0 0 32px rgb(170, 170, 170);
  z-index: 0;
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
</style>
