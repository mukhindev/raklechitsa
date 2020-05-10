<template>
  <div class="page">
    <app-header />
    <nuxt />
    <app-form v-if="popupShown" />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue';
import AppForm from '~/components/Form.vue';
import AppFooter from '~/components/Footer.vue';

export default {
  components: {
    AppHeader,
    AppForm,
    AppFooter,
  },
  computed: {
    popupShown() {
      return this.$store.state.popup.popupShown;
    },
  },
};
</script>

<style scoped></style>
