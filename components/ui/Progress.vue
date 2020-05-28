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
  props: {
    valueMax: Number,
    valuePrev: Number,
    value: Number,
  },
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

@media screen and (max-width: 1280px) {
  .progress-bar {
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .progress-bar {
    height: 28px;
  }
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
