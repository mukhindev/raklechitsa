<template>
  <button
    @click="$emit('click')"
    :type="type"
    :class="['button', { button_white: white }, { button_waiting: waiting }]"
    :disabled="disabled || waiting"
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
    disabled: Boolean,
    waiting: Boolean,
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
  position: relative;
  overflow: hidden;
}

.button_white {
  background: #fff;
  color: #666;
}

.button_waiting:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(0, 67, 103, 0) 0%,
    rgba(255, 255, 255, 0.795) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: waiting 1s linear infinite;
}

@keyframes waiting {
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
}

.button:disabled {
  cursor: default;
}

.button:hover {
  opacity: 0.9;
}
</style>
