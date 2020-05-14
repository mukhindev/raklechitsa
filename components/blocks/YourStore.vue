<template>
  <div>
    <section class="your-story">
      <ui-container class="your-story__container">
        <ui-heading>
          <template #title class="your-story__title"
            >Расскажите свою историю</template
          >
        </ui-heading>
        <div class="your-story__grid">
          <article class="your-story__article-left">
            <ui-heading>
              <template #subtitle class="your-story__subtitle"
                >Мы публикуем новые истории на сайте раз в неделю. Есть 2
                варианта поделиться своей историей неизлечимых привычек,
                навязчивых идей и болезненных привязанностей.
              </template>
            </ui-heading>
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
            <button-type
              class="your-story__button-type"
              v-if="isActiveButtonFirst"
              @click="quizOpen"
              >Заполнить форму</button-type
            >
            <button-type
              @click="yourContactsOpen"
              class="your-story__button-type"
              v-else
              >Оставить контакт</button-type
            >
          </article>
        </div>
      </ui-container>
    </section>
  </div>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import Button from '~/components/ui/Button';

export default {
  components: {
    'ui-heading': Heading,
    'ui-container': Container,
    'button-type': Button,
  },
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
    quizOpen() {
      this.$store.commit('popup/quizOpen');
    },
    yourContactsOpen() {
      this.$store.commit('popup/yourContactsOpen');
    },
  },
};
</script>

<style scoped>
.your-story {
  background-color: #f7f7f7;
}

.your-story__container {
  padding-top: 100px;
  padding-bottom: 100px;
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
  padding: 0;
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
    padding: 90px 50px 90px;
  }

  .your-story__button-type /deep/ .button {
    width: 230px;
    min-height: 48px;
    font-size: 16px;
    line-height: 19px;
  }
}

@media screen and (max-width: 1024px) {
  .your-story__container {
    padding: 80px 50px 80px;
  }

  .your-story__button-type /deep/ .button {
    width: 230px;
    min-height: 48px;
    font-size: 16px;
    line-height: 19px;
  }
  .your-story__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
  .your-story__subtitle {
    margin-top: 20px;
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }
  .your-story__btn {
    font-size: 15px;
    line-height: 19px;
  }
  .your-story__text {
    font-size: 15px;
    line-height: 19px;
  }
  .your-story__variants {
    margin-top: 20px;
  }
  .your-story__article-right {
    margin-top: 20px;
    min-height: 200px;
  }
  .your-story__grid {
    grid-column-gap: 30px;
  }
}
@media screen and (max-width: 768px) {
  .your-story__grid {
    grid-template-columns: minmax(290px, 380px);
    grid-column-gap: 30px;
    justify-content: center;
  }
  .your-story__container {
    padding: 80px 15px 80px;
  }
  .your-story__variants {
    margin-top: 80px;
  }
  .your-story__btn {
    display: inline-block;
  }
  .your-story__article-right {
    min-height: 191px;
  }
  .your-story__button-type /deep/ .button {
    font-size: 15px;
    line-height: 18px;
  }
  .your-story__btn-second {
    margin-left: 30px;
  }
  .your-story__btn_active {
    border-bottom: 2px solid #613a93;
    padding-bottom: 3px;
  }
}

@media screen and (max-width: 425px) {
  .your-story__container {
    padding: 50px 15px 50px;
  }
  .your-story__variants {
    margin-top: 40px;
  }
  .your-story__btn {
    font-size: 13px;
    line-height: 19px;
  }
  .your-story__grid {
    grid-column-gap: 20px;
  }
  .your-story__text {
    font-size: 13px;
    line-height: 16px;
  }
  .your-story__button-type /deep/ .button {
    font-size: 13px;
    line-height: 16px;
    width: 290px;
    min-height: 40px;
    margin: auto;
  }
  .your-story__article-right {
    margin-top: 20px;
    min-height: 166px;
  }
}
</style>
