<template>
  <section class="stats">
    <section-heading class="stats__heading">
      <template #title>Статистика по онкозаболеваниям</template>
    </section-heading>
    <div class="stats__grid">
      <stats-card
        v-for="({ valuePrev, value, valueMax, text, source, prefix, postfix },
        index) in stats"
        :key="index"
        :valuePrev="valuePrev"
        :value="value"
        :valueMax="valueMax"
      >
        <template #text>{{ text }}</template>
        <template #prefix>{{ prefix }}</template>
        <template #value>{{ value }}</template>
        <template #postfix>{{ postfix }}</template>
        <template #source>{{ source }}</template>
      </stats-card>
    </div>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import StatsCard from '~/components/StatsCard.vue';

export default {
  components: {
    SectionHeading,
    StatsCard,
  },
  data() {
    return {
      stats: [
        {
          text: `Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.`,
          valuePrev: null,
          value: 1,
          valueMax: 3,
          source: 'Левада-Центр 2018',
        },
        {
          text: '2,6% Россиян имеют онкозаболевания. ',
          valuePrev: null,
          value: 3700000,
          valueMax: 144500000,
          source: 'Росстат 2018',
        },
        {
          text: `На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.`,
          valuePrev: 20,
          value: 28,
          valueMax: 100,
          prefix: '↑',
          postfix: '%',
          source: 'МНИОИ Герцена 2018',
        },
        {
          text:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          valuePrev: 35,
          value: 25,
          valueMax: 100,
          prefix: '↓',
          postfix: '%',
          source: 'МНИОИ Герцена 2018',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stats__heading {
  margin: 0 0 70px;
}
.stats {
  padding: 100px 60px;
}
.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
