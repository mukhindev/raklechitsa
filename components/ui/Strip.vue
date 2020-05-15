<template>
  <p class="strip">
    <slot name="text"></slot
    ><span class="strip__tag" :class="{ strip__tag_block: tagblock === '' }"
      ><slot name="tag"></slot
    ></span>
  </p>
</template>

<script>
export default {
  props: ['tagblock'],
};
</script>

<style scoped>
.strip {
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
  .strip {
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .strip {
    font-size: 24px;
  }
}

@media screen and (max-width: 768px) {
  .strip {
    font-size: 22px;
    padding: 12px;
  }
}

@media screen and (max-width: 425px) {
  .strip {
    font-size: 16px;
    padding: 10px;
  }
}

.strip__tag {
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25em;
  line-height: 1.2;
  text-transform: uppercase;
}

.strip__tag_block {
  display: block;
}
</style>
