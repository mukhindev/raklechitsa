<template>
  <main class="main">
    <block-cover />
    <block-intro />
    <block-stories />
    <block-instagram />
    <block-your-store />
    <block-stats />
    <block-about />
  </main>
</template>

<style scoped></style>

<script>
import Cover from '~/components/blocks/Cover';
import Intro from '~/components/blocks/Intro';
import Stories from '~/components/blocks/Stories';
import Instagram from '~/components/blocks/Instagram';
import YourStore from '~/components/blocks/YourStore';
import Stats from '~/components/blocks/Stats';
import About from '~/components/blocks/About';

export default {
  components: {
    'block-cover': Cover,
    'block-intro': Intro,
    'block-stories': Stories,
    'block-instagram': Instagram,
    'block-your-store': YourStore,
    'block-stats': Stats,
    'block-about': About,
  },
  async fetch({ store, params }) {
    await store.dispatch('blocks/fetchBlocks');
    await store.dispatch('videos/fetchVideos');
    await store.dispatch('stories/fetchStories');
    await store.dispatch('statistics/fetchStatistics');
  },
};
</script>
