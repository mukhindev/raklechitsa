<template>
  <div class="page">
    <block-header />
    <nuxt />
    <block-quiz v-if="quizShown" />
    <block-footer />
    <block-share v-if="shareShown" />
  </div>
</template>

<script>
import Header from '~/components/blocks/Header';
import Quiz from '~/components/blocks/Quiz';
import Footer from '~/components/blocks/Footer';
import Share from '~/components/blocks/Share';

export default {
  components: {
    'block-header': Header,
    'block-quiz': Quiz,
    'block-footer': Footer,
    'block-share': Share,
  },
  computed: {
    quizShown() {
      return this.$store.state.popup.quizShown;
    },
    shareShown() {
      return this.$store.state.popup.shareShown;
    },
  },
};
</script>

<style scoped></style>
