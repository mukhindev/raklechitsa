<template>
  <div class="stories-container">
    <ul v-if="stories.length > 0" class="stories-container__grid">
      <story-card v-for="story in stories" :key="story.id" :story="story" />
    </ul>
    <p v-else>Не найдено</p>
    <nuxt-link
      v-if="more === ''"
      to="/stories"
      class="stories-container__button-more"
    >
      <span class="stories-container__button-text">Больше статей</span>
    </nuxt-link>
  </div>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import StoryCard from './StoryCard.vue';

export default {
  components: {
    SectionHeading,
    StoryCard,
  },
  props: ['start', 'limit', 'more', 'filter'],
  computed: {
    stories() {
      if (this.filter) return this.filterStore;
      return this.$store.getters['stories/getStories'](this.start, this.limit);
    },
    filterStore() {
      return this.$store.getters['stories/getStories'](
        this.start,
        this.limit
      ).filter(el => el.person.includes(this.filter));
    },
  },
};
</script>

<style scoped>
.stories {
  padding: 50px 60px;
}
.stories-container__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
.stories-container__button-more {
  margin: 70px 0 0;
  padding: 31px 0;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  cursor: pointer;
  text-decoration: none;
}
.stories-container__button-more:hover {
  color: #fff;
  background-color: #613a93;
}
.stories-container__button-text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.25;
}
</style>
