<template>
  <div class="section-heading">
    <h2 class="section-heading__title"><slot name="title" /></h2>
    <p v-if="hasSubtitle" class="section-heading__subtitle">
      <slot name="subtitle" />
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    hasSubtitle() {
      return Boolean(this.$slots.subtitle);
    },
  },
};
</script>

<style scoped>
.section-heading__title {
  max-width: 413px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
  transition: all 0.25s ease;
}

@media screen and (max-width: 1280px) {
  .section-heading__title {
    max-width: 367px;
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .section-heading__title {
    max-width: 288px;
    font-size: 24px;
  }
}

.section-heading__subtitle {
  max-width: 340px;
  margin: 32px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.22;
  color: #666666;
  transition: all 0.25s ease;
}

@media screen and (max-width: 1280px) {
  .section-heading__subtitle {
    max-width: 305px;
    margin: 30px 0 0;
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .section-heading__subtitle {
    max-width: 260px;
    margin: 20px 0 0;
    font-size: 13px;
  }
}
</style>
