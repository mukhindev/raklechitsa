<template>
  <div class="page">
    <block-header />
    <nuxt />
    <block-quiz v-if="quizShown" />
    <block-footer />
  </div>
</template>

<script>
import Header from '~/components/blocks/Header';
import Quiz from '~/components/blocks/Quiz';
import Footer from '~/components/blocks/Footer';

export default {
  components: {
    'block-header': Header,
    'block-quiz': Quiz,
    'block-footer': Footer,
  },
  computed: {
    quizShown() {
      return this.$store.state.popup.quizShown;
    },
  },
};
</script>

<style scoped></style>
