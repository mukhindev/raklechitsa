<template>
  <div class="two-columns">
    <div class="two-columns__heading"><slot name="heading"></slot></div>
    <div class="two-columns__content"><slot name="content"></slot></div>
  </div>
</template>

<style scoped>
.two-columns {
  display: flex;
}

.two-columns__heading {
  min-width: 413px;
  margin-right: 24px;
}

@media screen and (max-width: 1280px) {
  .two-columns__heading {
    min-width: 367px;
  }
}

@media screen and (max-width: 1024px) {
  .two-columns__heading {
    min-width: 288px;
  }
}

.two-columns__content {
  width: 100%;
}
</style>
