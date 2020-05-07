<template>
  <section class="stories">
    <section-heading class="stories__heading">
      <template #title>Истории неизлечимых привычек</template>
      <template #subtitle
        >А вот здесь выводится подзаголовок. Это временно, в данной секции он не
        нужен, не забыть убрать</template
      >
    </section-heading>
    <stories-grid start="0" limit="8" more />
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import StoriesGrid from './StoriesGrid.vue';

export default {
  components: {
    SectionHeading,
    StoriesGrid,
  },
};
</script>

<style scoped>
.stories {
  padding: 50px 60px;
}
.stories__heading {
  margin: 0 0 70px;
}
</style>
