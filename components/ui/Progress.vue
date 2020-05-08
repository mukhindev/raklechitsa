<template>
  <div class="progress-bar" :class="{ 'progress-bar_comparison': valuePrev }">
    <div
      v-if="valuePrev"
      class="progress-bar__fill-prev"
      :style="progressPrev"
    ></div>
    <div class="progress-bar__fill" :style="progress"></div>
  </div>
</template>

<script>
export default {
  props: ['valueMax', 'valuePrev', 'value'],
  computed: {
    progressPrev() {
      if (!this.valuePrev) return null;
      const bar = this.findPercent(this.valuePrev, this.valueMax);
      return { width: `${bar}%` };
    },
    progress() {
      const bar = this.findPercent(this.value, this.valueMax);
      return { width: `${bar}%` };
    },
  },
  methods: {
    findPercent(value, valueMax) {
      return (value / valueMax) * 100;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  height: 40px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
}
.progress-bar_comparison {
  background-color: #fff;
}
.progress-bar__fill-prev {
  background-color: #f4f4f4;
  height: 100%;
}
.progress-bar__fill {
  background-color: #613a93;
  height: 100%;
}
</style>
