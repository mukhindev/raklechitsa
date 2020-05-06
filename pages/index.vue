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

<script></script>

<style scoped></style>

<script>
import BlockCover from '~/components/Cover.vue';
import BlockIntro from '~/components/Intro.vue';
import BlockStories from '~/components/Stories.vue';
import BlockInstagram from '~/components/Instagram.vue';
import BlockYourStore from '~/components/YourStore.vue';
import BlockStats from '~/components/Stats.vue';
import BlockAbout from '~/components/About.vue';

export default {
  components: {
    BlockCover,
    BlockIntro,
    BlockStories,
    BlockInstagram,
    BlockYourStore,
    BlockStats,
    BlockAbout,
  },
};
</script>
