<template>
  <section class="about">
    <ui-container class="stats__container">
      <div class="about__container">
        <h3 class="about__title">#РАКЛЕЧИТСЯ</h3>
        <div class="about__text">
          <div class="about__one-colum">
            <h4 class="about__one-colum-title">О проекте</h4>
            <p class="about__one-colum-subtitle">
              Этот&nbsp;проект&nbsp;был&nbsp;создан
              благотворительным&nbsp;фондом Константина&nbsp;Хабенского.
            </p>
          </div>
          <div class="about__two-colums">
            <div class="about__two-colums-brif">
              <h5 class="about__two-colums-brif-title">Рак&nbsp;Лечится</h5>
              <p class="about__two-colums-brif-subtitle">
                Фонд&nbsp;Хабенского
              </p>
            </div>
            <div class="about__two-colums-text">
              <p class="about__two-colums-paragraph">
                Есть вещи, которые не лечатся. Особенности характера, страстные
                увлечения, привычки, ставшие частью нашего «я», фобии, которые
                мы приобрели в детстве. Список можно продолжать до
                бесконечности, но одна болезнь в него точно не войдет. Эта
                болезнь — рак. Рак лечится, и лучшее доказательство — люди с их
                неизлечимыми особенностями, которые сумели победить рак.
              </p>
              <p class="about__two-colums-paragraph">
                Рак лечится — проект Благотворительного Фонда Константина
                Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
                изменить отношение людей к раку и заставить каждого поверить:
                онкологическое заболевание — это не приговор.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';

export default {
  components: {
    'ui-container': Container,
  },
};
</script>

<style scoped>
.about {
  background: #613a93;
  color: #ffffff;
}

.about__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

.about__title {
  max-width: 720px;
  margin: 0;
  margin-bottom: 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
}

@media screen and (max-width: 1280px) {
  .about__title {
    margin-bottom: 60px;
  }
}

.about__text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.about__one-colum {
  margin: 0;
  padding: 0;
  max-width: 340px;
}

.about__one-colum-title {
  margin: 0;
  padding: 0;
  padding-bottom: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.about__one-colum-subtitle {
  margin: 0;
  padding: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #dedede;
}

.about__two-colums {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  padding-top: 68px;
}

.about__two-colums-text {
  max-width: 640px;
}

.about__two-colums-brif {
  padding: 0;
  padding-right: 40px;
}

.about__two-colums-brif-title {
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  text-align: end;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.about__two-colums-brif-subtitle {
  margin: 0;
  padding: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: end;
  color: #c9c9c9;
}

.about__two-colums-paragraph {
  margin: 0;
  padding: 0;
  max-width: 640px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}
.about__two-colums-paragraph:first-of-type {
  padding-bottom: 20px;
}
</style>
