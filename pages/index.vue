<template>
  <main class="main">
    <block-cover />
    <block-intro />
    <block-stories />
    <block-instagram />
    <block-your-store />
    <block-stats />
    <block-about />
  </main>
</template>

<style scoped></style>

<script>
import Cover from '~/components/blocks/Cover';
import Intro from '~/components/blocks/Intro';
import Stories from '~/components/blocks/Stories';
import Instagram from '~/components/blocks/Instagram';
import YourStore from '~/components/blocks/YourStore';
import Stats from '~/components/blocks/Stats';
import About from '~/components/blocks/About';

export default {
  head: {
    title: 'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',
    meta: [
      {
        name: 'description',
        content:
          'Информационный проект Фонда Хабенского. Есть вещи, которые не лечатся. В отличие от рака. #раклечится Вместе мы изменим отношение людей!  Какая привычка или фобия не лечится у вас? #этонелечится',
      },
      { name: 'keywords', content: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится' },
    ],
  },
  components: {
    'block-cover': Cover,
    'block-intro': Intro,
    'block-stories': Stories,
    'block-instagram': Instagram,
    'block-your-store': YourStore,
    'block-stats': Stats,
    'block-about': About,
  },
};
</script>
