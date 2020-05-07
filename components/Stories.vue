<template>
  <section class="stories">
    <h2 class="section-title">Истории неизлечимых привычек</h2>
    <transition-group class="stories__grid" name="fade" tag="ul">
      <story-card v-for="story in stories" :key="story.id" :story="story" />
    </transition-group>
    <nuxt-link to="/stories" class="stories__button-more">
      <span class="stories__button-text">Больше статей</span>
    </nuxt-link>
  </section>
</template>

<script>
import StoryCard from './StoryCard.vue';

export default {
  components: {
    StoryCard,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'](0, 8);
    },
  },
};
</script>

<style scoped>
.stories {
  padding: 50px 60px;
}
.section-title {
  margin: 0;
  max-width: 415px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
}
.stories__grid {
  list-style: none;
  padding: 0;
  margin: 70px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
.stories__button-more {
  padding: 31px 0;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  cursor: pointer;
  text-decoration: none;
}
.stories__button-more:hover {
  color: #fff;
  background-color: #613a93;
}
.stories__button-text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.25;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(32px);
}
</style>
