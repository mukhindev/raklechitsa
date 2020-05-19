<template>
  <div class="page">
    <block-header />
    <nuxt />
    <block-quiz v-if="quizShown" />
    <block-your-contacts v-if="yourContactsShown" />
    <block-share v-if="shareShown" />
  </div>
</template>

<script>
import Header from '~/components/blocks/Header';
import Quiz from '~/components/blocks/Quiz';
import YourContacts from '~/components/blocks/YourContacts';
import Share from '~/components/blocks/Share';

export default {
  components: {
    'block-header': Header,
    'block-quiz': Quiz,
    'block-your-contacts': YourContacts,
    'block-share': Share,
  },
  computed: {
    quizShown() {
      return this.$store.state.popup.quizShown;
    },
    yourContactsShown() {
      return this.$store.state.popup.yourContactsShown;
    },
    shareShown() {
      return this.$store.state.popup.shareShown;
    },
  },
};
</script>

<style scoped></style>
