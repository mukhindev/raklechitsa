<template>
  <section class="cover">
    <block-container class="cover__container">
      <p class="cover__tag">#раклечится</p>
      <div class="cover__polygon"></div>
    </block-container>
  </section>
</template>
<script>
import BlockContainer from '~/components/Container.vue';

export default {
  components: {
    BlockContainer,
  },
};
</script>

<style scoped>
.cover {
  background: #613a93;
}
.cover__container {
  min-height: 689px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
}

@media screen and (max-width: 1280px) {
  .cover__container {
    min-height: 620px;
  }
}

@media screen and (max-width: 1024px) {
  .cover__container {
    min-height: 540px;
  }
}
.cover__tag {
  color: #ffffff;
  font-weight: 800;
  font-size: 92px;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

@media screen and (max-width: 1280px) {
  .cover__tag {
    font-size: 78px;
  }
}

.cover__polygon {
  background: url('/images/ui/arrow-wide-down.svg');
  background-size: contain;
  background-repeat: none;
  width: 38px;
  height: 15px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0;
}
</style>
