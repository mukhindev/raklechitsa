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
.stats__text {
  margin: 0;
  min-height: 124px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.33;
}
.stats__value {
  margin: 20px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.05;
  text-align: right;
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
</style>
