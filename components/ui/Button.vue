<template>
  <button @click="$emit('click')" type="button" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  padding: 0;
  background: #613a93;
  width: 280px;
  min-height: 52px;
  border: none;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}

.button:hover {
  opacity: 0.9;
}
</style>
