<template>
  <div>
    components/Stories
    <ul class="stories__grid">
      <li v-for="story in stories" :key="story.id" class="stories__story">
        <img
          :src="story.photo"
          :alt="`фото ${story.person}`"
          class="stories__photo"
        />
        <h3>{{ story.person }}</h3>
        <p>{{ story.quote }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'](0, 8).reverse();
    },
  },
};
</script>

<style scoped>
.stories__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.stories__photo {
  width: 100%;
}
</style>
