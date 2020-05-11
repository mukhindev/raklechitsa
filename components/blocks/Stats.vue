<template>
  <section class="stats">
    <ui-container class="stats__container">
      <ui-heading class="stats__heading">
        <template #title>Статистика по онкозаболеваниям</template>
      </ui-heading>
      <div class="stats__grid">
        <blocks-stats-card
          v-for="(el, index) in statsFormated"
          :key="index"
          :valuePrev="el.valuePrev"
          :value="el.value"
          :valueMax="el.valueMax"
        >
          <template #text>{{ el.text }}</template>
          <template #value>{{ el.valueText }}</template>
          <template #source>{{ el.source }}</template>
        </blocks-stats-card>
      </div>
      <!--TODO: подумать над префиксами -->
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
      if (this.filter) return this.filterStore;
      return this.$store.getters['api/getStats'];
    },
    statsFormated() {
      return this.stats.map(el => {
        const postfix = el.postfix || '';

        let prefix;
        let value;

        function getPrefix(value, valuePrev) {
          if (value > valuePrev) return '↑';
          else if (value === valuePrev) return '';
          else return '↓';
        }

        if (el.prefix) prefix = getPrefix(el.value, el.valuePrev);
        else prefix = '';

        if (el.type === 'of') value = `${el.value} из ${el.valueMax}`;
        else value = el.value || '';

        return { ...el, valueText: `${prefix}${value}${postfix}` };
      });
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
.stats__heading {
  margin: 0 0 70px;
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
    gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .stats__grid {
    gap: 10px;
  }
}
</style>
