<template>
  <section class="about">
    <ui-container class="about__container">
      <h3 class="about__tag">#РАКЛЕЧИТСЯ</h3>
      <div class="about__colunms">
        <ui-heading class="about__heading" theme="dark">
          <template #title>О проекте</template>
          <template #subtitle
            >Этот проект был создан благотворительным фондом Константина
            Хабенского.</template
          >
        </ui-heading>
        <ui-tabs :tabs="tabs" theme="dark" />
      </div>
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import Tabs from '~/components/ui/Tabs';

export default {
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'ui-tabs': Tabs,
  },
  data() {
    return {
      tabs: [
        {
          name: 'Рак Лечится',
          content: [
            'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.',
            'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
          ],
        },
        {
          name: 'Фонд Хабенского',
          content: [
            'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  background: #613a93;
  color: #fff;
}

.about__container {
  padding-top: 90px;
  padding-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .about__container {
    padding: 80px 40px 80px;
  }
}

@media screen and (max-width: 425px) {
  .about__container {
    padding: 50px 15px 50px;
  }
}

.about__tag {
  margin: 0 0 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 1.25;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .about__tag {
    display: none;
  }
}

.about__colunms {
  display: flex;
}

@media screen and (max-width: 768px) {
  .about__colunms {
    flex-direction: column;
    align-items: center;
  }
  .about__heading {
    margin: 0 0 80px;
  }
}

@media screen and (max-width: 425px) {
  .about__heading {
    margin: 0 0 40px;
  }
}
</style>
