<template>
  <section class="stories">
    <block-container class="stories_container">
      <section-heading class="stories__heading">
        <template #title>Истории неизлечимых привычек</template>
      </section-heading>
      <stories-grid start="0" limit="8" more />
    </block-container>
  </section>
</template>

<script>
import BlockContainer from '~/components/Container.vue';
import SectionHeading from './SectionHeading.vue';
import StoriesGrid from './StoriesGrid.vue';

export default {
  components: {
    BlockContainer,
    SectionHeading,
    StoriesGrid,
  },
};
</script>

<style scoped>
.stories_container {
  padding-top: 100px;
}
.stories__heading {
  margin: 0 0 70px;
}
</style>
