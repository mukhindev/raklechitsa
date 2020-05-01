<template>
  <div class="page">
    <app-header />
    <nuxt />
  </div>
</template>

<style scoped></style>

<script>
import AppHeader from '~/components/Header.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>
