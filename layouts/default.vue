<template>
  <div class="page">
    <app-header @popupOpen="popupHandler" />
    <nuxt />
    <app-form v-if="popupShown" @popupClose="popupHandler" />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue';
import AppFooter from '~/components/Footer.vue';
import AppForm from '~/components/Form.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppForm,
  },
  data() {
    return {
      popupShown: false,
    };
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
  },
};
</script>

<style scoped>
.page {
  margin: 0 auto;
  max-width: 1440px;
}
</style>
