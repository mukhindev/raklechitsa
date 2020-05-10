<template>
  <div class="containter"><slot></slot></div>
</template>

<style scoped>
.containter {
  box-sizing: border-box;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
}
@media screen and (max-width: 1280px) {
  .containter {
    padding: 0 50px;
  }
}
</style>
