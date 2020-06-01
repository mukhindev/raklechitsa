<template>
  <section class="stats">
    <ui-container class="stats__container">
      <ui-heading class="stats__heading">
        <template #title>{{ block.title }}</template>
      </ui-heading>
      <div class="scroll-container">
        <div class="stats__grid">
          <blocks-stats-card
            v-for="(el, index) in stats"
            :key="index"
            :valuePrev="el.oldValue"
            :value="el.currentValue"
            :valueMax="el.maxValue"
          >
            <template #text>{{ el.description }}</template>
            <template #value>{{ el.summary }}</template>
            <template #source>{{ el.source }}</template>
          </blocks-stats-card>
        </div>
      </div>
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import StatsCard from '~/components/blocks/StatsCard';

export default {
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'blocks-stats-card': StatsCard,
  },
  computed: {
    stats() {
      return this.$store.state.statistics.statistics;
    },
    block() {
      return this.$store.state.blocks.blocks.find(
        el => el.block === 'statistics'
      );
    },
  },
};
</script>

<style scoped>
/* TODO: с 768 и меньше вся секция должна скролиться горизонтально */
.stats__container {
  padding-top: 100px;
  padding-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .stats__container {
    padding: 80px 0 60px;
  }
}

.stats__heading {
  margin: 0 0 70px;
}

@media screen and (max-width: 425px) {
  .stats__heading {
    margin-left: 15px;
  }
}

@media screen and (max-width: 768px) {
  .scroll-container {
    overflow-x: scroll;
    padding: 0 0 20px 0;
    position: relative;
  }
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

@media screen and (max-width: 1024px) {
  .stats__grid {
    gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .stats__grid {
    width: fit-content;
    padding: 0 40px;
    grid-template-columns: repeat(4, 216px);
    gap: 20px;
    user-select: none;
  }
}

@media screen and (max-width: 425px) {
  .stats__grid {
    gap: 10px;
    padding: 0 15px;
  }
}
</style>
