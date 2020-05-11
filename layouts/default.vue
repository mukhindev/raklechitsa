<template>
  <div class="page">
    <block-header />
    <nuxt />
    <block-form v-if="popupShown" />
    <block-footer />
  </div>
</template>

<script>
import Header from '~/components/blocks/Header';
import Form from '~/components/blocks/Form';
import Footer from '~/components/blocks/Footer';

export default {
  components: {
    'block-header': Header,
    'block-form': Form,
    'block-footer': Footer,
  },
  computed: {
    popupShown() {
      return this.$store.state.popup.popupShown;
    },
  },
};
</script>

<style scoped></style>
