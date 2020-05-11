<template>
  <div class="ui-two-columns">
    <div class="ui-two-columns__heading"><slot name="heading"></slot></div>
    <div class="ui-two-columns__content"><slot name="content"></slot></div>
  </div>
</template>

<style scoped>
.ui-two-columns {
  display: flex;
}

.ui-two-columns__heading {
  min-width: 413px;
  margin-right: 24px;
}

@media screen and (max-width: 1280px) {
  .ui-two-columns__heading {
    min-width: 367px;
  }
}

@media screen and (max-width: 1024px) {
  .ui-two-columns__heading {
    min-width: 288px;
  }
}

.ui-two-columns__content {
  width: 100%;
}
</style>
