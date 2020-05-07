<template>
  <section class="stories">
    <h2 class="section-title">Истории неизлечимых привычек</h2>
    <ul class="stories__grid">
      <story-card v-for="story in stories" :key="story.id" :story="story" />
    </ul>
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
      return this.$store.getters['stories/getStories'](0, 8).reverse();
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
  margin: 70px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
