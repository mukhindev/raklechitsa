<template>
  <div>stories/{{ id }} Одна история</div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped></style>
