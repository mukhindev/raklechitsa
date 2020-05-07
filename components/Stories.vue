<template>
  <section class="stories">
    <section-heading>
      <template #title>Истории неизлечимых привычек</template>
      <template #subtitle
        >А вот здесь выводится подзаголовок. Это временно, в данной секции он не
        нужен, не забыть убрать</template
      >
    </section-heading>
    <ul class="stories__grid">
      <story-card v-for="story in stories" :key="story.id" :story="story" />
    </ul>
    <nuxt-link to="/stories" class="stories__button-more">
      <span class="stories__button-text">Больше статей</span>
    </nuxt-link>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import StoryCard from './StoryCard.vue';

export default {
  components: {
    SectionHeading,
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
</style>
