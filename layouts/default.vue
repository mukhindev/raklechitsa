<template>
  <div class="page">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<style scoped></style>

<script>
import AppHeader from '~/components/Header.vue';
import AppFooter from '~/components/Footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
