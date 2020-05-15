<template>
  <button
    @click="$emit('click')"
    :type="type"
    class="button"
    :class="{ button_white: white }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    white: Boolean,
  },
};
</script>

<style scoped>
.button {
  flex-shrink: 0;
  padding: 0;
  background: #613a93;
  min-height: 52px;
  border: none;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: #fff;
  transition: all 0.25s;
}

.button_white {
  background: #fff;
  color: #666666;
}

.button:disabled {
  cursor: default;
}

.button:hover {
  opacity: 0.9;
}
</style>
