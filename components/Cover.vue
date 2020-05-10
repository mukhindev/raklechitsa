<template>
  <section class="cover">
    <block-container class="cover__container">
      <p class="cover__tag">#РАКЛЕЧИТСЯ</p>
      <svg
        class="cover__polygon"
        width="38"
        height="15"
        viewBox="0 0 38 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M37 1L19 13L1 1" stroke="white" stroke-width="2" />
      </svg>
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
  height: 689px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover__tag {
  color: #ffffff;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  margin: 0;
}

.cover__polygon {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0;
}
</style>
