<template>
  <section class="stories">
    <h2 class="section-title">Истории неизлечимых привычек</h2>
    <transition-group class="stories__grid" name="fade" tag="ul">
      <story-card v-for="story in stories" :key="story.id" :story="story" />
    </transition-group>
    <div
      v-if="thereAreMoreStories"
      class="stories__button-more"
      @click="moreStories"
    >
      <span class="stories__button-text">Больше статей</span>
    </div>
    <div v-else class="stories__button-no-more">
      <span class="stories__button-text">Нет больше статей</span>
    </div>
  </section>
</template>

<script>
import StoryCard from './StoryCard.vue';

export default {
  components: {
    StoryCard,
  },
  data() {
    return {
      numberOfVisibleStories: 4,
    };
  },
  computed: {
    numberOfStories() {
      return this.$store.getters['stories/getNumberOfStories'];
    },
    stories() {
      return this.$store.getters['stories/getStories'](
        0,
        this.numberOfVisibleStories
      );
    },
    thereAreMoreStories() {
      if (this.numberOfVisibleStories < this.numberOfStories) return true;
      else return false;
    },
  },
  methods: {
    moreStories() {
      this.numberOfVisibleStories += 4;
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
}
.stories__button-no-more {
  padding: 31px 0;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
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
