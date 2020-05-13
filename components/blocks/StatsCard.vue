<template>
  <div class="stats__card">
    <p class="stats__text"><slot name="text"></slot></p>
    <ui-progress :valueMax="valueMax" :valuePrev="valuePrev" :value="value" />
    <p class="stats__value">
      <slot name="prefix"></slot><slot name="value"></slot
      ><slot name="postfix"></slot>
    </p>
    <p class="stats__source"><slot name="source"></slot></p>
  </div>
</template>

<script>
import Progress from '~/components/ui/Progress';

export default {
  components: {
    'ui-progress': Progress,
  },
  props: ['valueMax', 'valuePrev', 'value'],
};
</script>

<style scoped>
.stats__card {
  padding: 20px;
  border: 1px solid #efefef;
}

@media screen and (max-width: 1280px) {
  .stats__card {
    padding: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .stats__card {
    padding: 10px;
  }
}

.stats__text {
  margin: 0;
  min-height: 124px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.33;
}

@media screen and (max-width: 1024px) {
  .stats__text {
    font-size: 10px;
  }
}

.stats__value {
  margin: 20px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.05;
  text-align: right;
}

@media screen and (max-width: 1024px) {
  .stats__value {
    font-size: 30px;
  }
}

.stats__source {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.33;
  text-align: right;
  color: #666666;
}

@media screen and (max-width: 1024px) {
  .stats__source {
    font-size: 10px;
  }
}
</style>
