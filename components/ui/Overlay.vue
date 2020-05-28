<template>
  <transition appear name="transition-fade">
    <div class="overlay"><slot></slot></div>
  </transition>
</template>

<script>
export default {
  mounted() {
    this.bodyTag = document.querySelector('body');
    this.bodyTag.style.overflowY = 'hidden';
  },
  destroyed() {
    this.bodyTag.style.overflowY = 'auto';
  },
};
</script>

<style scoped>
.overlay {
  box-sizing: border-box;
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
  overflow-y: auto;
  padding: 15px 112px;
  flex-shrink: 0;
}

@media screen and (max-width: 1024px) {
  .overlay {
    padding: 15px 112px;
  }
}

@media screen and (max-width: 920px) {
  .overlay {
    padding: 15px 94px;
  }
}

@media screen and (max-width: 720px) {
  .overlay {
    padding: 15px;
  }
}

.transition-fade-enter-active,
.transition-fade-leave-active {
  transition: all 0.25s;
}

.transition-fade-enter,
.transition-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
