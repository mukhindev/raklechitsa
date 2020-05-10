<template>
  <div>
    <section class="your-story">
      <div class="your-story__container">
        <section-heading>
          <template #title>Расскажите свою историю</template>
        </section-heading>
        <div class="your-story__grid">
          <article class="your-story__article-left">
            <section-heading>
              <template #subtitle
                >Мы публикуем новые истории на сайте раз в неделю. Есть 2
                варианта поделиться своей историей неизлечимых привычек,
                навязчивых идей и болезненных привязанностей.
              </template>
            </section-heading>
          </article>
          <div class="your-story__variants">
            <button
              type="button"
              class="your-story__btn your-story__btn-first"
              @click="changeText($event)"
              :class="{ 'your-story__btn_active': isActiveButtonFirst }"
            >
              1-й вариант
            </button>
            <button
              type="button"
              class="your-story__btn your-story__btn-second"
              @click="changeText($event)"
              :class="{ 'your-story__btn_active': isActiveButtonSecond }"
            >
              2-й вариант
            </button>
          </div>
          <article class="your-story__article-right">
            <p class="your-story__text" v-html="showText"></p>
            <button-type class="your-story__button-type"
              >Заполнить форму</button-type
            >
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeading from '~/components/SectionHeading';
import Button from '~/components/ui/Button';
export default {
  data() {
    return {
      isActiveButtonFirst: true,
      isActiveButtonSecond: false,
      firstText:
        'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2&#8209;м вариантом.',
      secondText:
        'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
    };
  },
  computed: {
    showText() {
      if (this.isActiveButtonFirst) {
        return this.firstText;
      } else {
        return this.secondText;
      }
    },
  },
  components: {
    SectionHeading,
    'button-type': Button,
  },
  methods: {
    changeText(event) {
      if (event.target.classList.contains('your-story__btn-first')) {
        this.isActiveButtonSecond = false;
        this.isActiveButtonFirst = true;
      }
      if (event.target.classList.contains('your-story__btn-second')) {
        this.isActiveButtonFirst = false;
        this.isActiveButtonSecond = true;
      }
    },
  },
};
</script>

<style scoped>
.your-story {
  background-color: #f7f7f7;
}

.your-story__container {
  max-width: 1320px;
  padding: 100px 60px;
  margin: auto;
}

.your-story__grid {
  display: grid;
  grid-template-columns: 1fr max-content 1.35fr;
  grid-column-gap: 40px;
}

.your-story__variants {
  margin-top: 32px;
}

.your-story__btn {
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: block;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #a2a2a2;
}

.your-story__btn:nth-of-type(even) {
  margin-top: 10px;
}

.your-story__btn_active {
  color: #000;
}

.your-story__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  color: #666;
}

.your-story__article-right {
  min-height: 218px;
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.your-story__text {
  margin: 0;
}

@media screen and (max-width: 1280px) {
  .your-story__container {
    padding: 90px 50px;
  }
}
</style>
