<template>
  <section class="stories">
    <ui-container class="stories_container">
      <ui-heading class="stories__heading">
        <template #title>Истории неизлечимых привычек</template>
      </ui-heading>
      <block-stories-grid start="0" limit="8" more />
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import StoriesGrid from '~/components/blocks/StoriesGrid';

export default {
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'block-stories-grid': StoriesGrid,
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
@media screen and (max-width: 768px) {
  .stories_container {
    padding-top: 80px;
  }
  .stories__heading {
    margin: 0 0 60px;
  }
}
@media screen and (max-width: 425px) {
  .stories_container {
    padding-top: 50px;
  }
  .stories__heading {
    margin: 0 0 40px;
  }
}
</style>
