<template>
  <div class="overlay"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
