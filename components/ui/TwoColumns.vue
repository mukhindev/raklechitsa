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

@media screen and (max-width: 768px) {
  .ui-two-columns {
    flex-direction: column;
  }
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

@media screen and (max-width: 768px) {
  .ui-two-columns__heading {
    min-width: none;
    margin: 0 0 60px;
  }
}

@media screen and (max-width: 425) {
  .ui-two-columns__heading {
    margin: 0 0 40px;
  }
}

.ui-two-columns__content {
  width: 100%;
}
</style>
