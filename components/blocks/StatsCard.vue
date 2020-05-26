<template>
  <div class="stats-card">
    <p class="stats-card__text"><slot name="text"></slot></p>
    <ui-progress :valueMax="valueMax" :valuePrev="valuePrev" :value="value" />
    <p class="stats-card__value">
      <slot name="prefix"></slot><slot name="value"></slot
      ><slot name="postfix"></slot>
    </p>
    <p class="stats-card__source"><slot name="source"></slot></p>
  </div>
</template>

<script>
import Progress from '~/components/ui/Progress';

export default {
  components: {
    'ui-progress': Progress,
  },
  props: {
    valueMax: Number,
    valuePrev: Number,
    value: Number,
  },
};
</script>

<style scoped>
.stats-card {
  padding: 20px;
  border: 1px solid #efefef;
}

@media screen and (max-width: 1280px) {
  .stats-card {
    padding: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .stats-card {
    padding: 10px;
  }
}

.stats-card__text {
  margin: 0;
  min-height: 124px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.33;
}

@media screen and (max-width: 1024px) {
  .stats-card__text {
    font-size: 10px;
  }
}

.stats-card__value {
  margin: 20px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.05;
  text-align: right;
  white-space: nowrap;
}

@media screen and (max-width: 1024px) {
  .stats-card__value {
    font-size: 30px;
  }
}

.stats-card__source {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.33;
  text-align: right;
  color: #666;
}

@media screen and (max-width: 1024px) {
  .stats-card__source {
    font-size: 10px;
  }
}
</style>
