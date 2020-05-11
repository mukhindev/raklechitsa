<template>
  <section class="about">
    <ui-container class="about__container">
      <h3 class="about__tag">#РАКЛЕЧИТСЯ</h3>
      <div class="about__grid">
        <ui-heading class="stats__heading" theme="dark">
          <template #title>О проекте</template>
          <template #subtitle
            >Этот проект был создан благотворительным фондом Константина
            Хабенского.</template
          >
        </ui-heading>
        <div class="about__menu">
          <p
            class="about__item"
            :class="{ about__item_active: tab === 1 }"
            @click="tab = 1"
          >
            Рак Лечится
          </p>
          <p
            class="about__item"
            :class="{ about__item_active: tab === 2 }"
            @click="tab = 2"
          >
            Фонд Хабенского
          </p>
        </div>
        <div v-if="tab === 1" class="about__text">
          <p class="about__paragraph">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </p>
          <p class="about__paragraph">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </p>
        </div>
        <div v-if="tab === 2" class="about__text">
          <p class="about__paragraph">
            Благотворительный Фонд Константина Хабенского с 2008 года помогает
            детям с онкологическими и другими тяжелыми заболеваниями головного
            мозга. Фонд не только поддерживает семью заболевшего ребенка в самый
            сложный момент, оплачивая обследования, лечение и медицинские
            препараты, но и в целом меняет систему оказания помощи детям с
            опухолями мозга в России.
          </p>
        </div>
      </div>
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';

export default {
  data() {
    return {
      tab: 1,
    };
  },
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
  },
};
</script>

<style scoped>
.about {
  background: #613a93;
  color: #ffffff;
}

.about__tag {
  margin: 0 0 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 1.25;
  text-align: center;
}

.about__container {
  padding-top: 90px;
  padding-bottom: 100px;
}

.about__grid {
  display: grid;
  grid-template-columns: auto auto 640px;
}

@media screen and (max-width: 1280px) {
  .about__grid {
    grid-template-columns: auto auto 570px;
  }
}

@media screen and (max-width: 1024px) {
  .about__grid {
    grid-template-columns: auto auto 447px;
  }
}

.about__menu {
  justify-self: right;
  margin-right: 40px;
}

@media screen and (max-width: 1024px) {
  .about__menu {
    margin-right: 30px;
  }
}

.about__item {
  margin: 0 0 10px;
  text-align: right;
  color: #c9c9c9;
  cursor: pointer;
  white-space: nowrap;
  font-size: 18px;
  line-height: 1.25;
}

@media screen and (max-width: 1024px) {
  .about__item {
    margin: 0 0 8px;
    font-size: 15px;
  }
}

.about__item_active {
  margin: 0 0 10px;
  text-align: right;
  color: #ffffff;
  cursor: default;
}

.about__paragraph {
  margin: 0 0 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.25;
  color: #dedede;
}

@media screen and (max-width: 1024px) {
  .about__paragraph {
    font-size: 15px;
  }
}

.about__paragraph:last-of-type {
  margin: 0;
}
</style>
