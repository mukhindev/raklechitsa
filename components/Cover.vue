<template>
  <section class="cover">
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
  </section>
</template>

<style scoped>
.cover {
  position: relative;
  background: #613a93;
  width: 100%;
  height: 689px;
  margin: 0;
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
  margin: 0;
}
</style>
