<template>
  <p class="line">
    <slot name="text"></slot
    ><span class="line__tag" :class="{ line__tag_block: newline === '' }"
      ><slot name="tag"></slot
    ></span>
  </p>
</template>

<script>
export default {
  props: ['newline'],
};
</script>

<style scoped>
.line {
  margin: 0;
  background: #613a93;
  padding: 20px;
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 1.2;
  text-transform: uppercase;
  grid-column: 1 / -1;
  text-align: center;
}

@media screen and (max-width: 1280px) {
  .line {
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .line {
    font-size: 24px;
  }
}

.line__tag {
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25em;
  line-height: 1.2;
  text-transform: uppercase;
}

.line__tag_block {
  display: block;
}
</style>
