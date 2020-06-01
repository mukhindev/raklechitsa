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
  transition: all 0.25s ease;
}

@media screen and (max-width: 1280px) {
  .containter {
    padding: 0 50px;
  }
}

@media screen and (max-width: 768px) {
  .containter {
    padding: 0 40px;
  }
}

@media screen and (max-width: 425px) {
  .containter {
    padding: 0 15px;
  }
}
</style>
