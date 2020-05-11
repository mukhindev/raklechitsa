<template>
  <ui-overlay>
    <div class="popup">
      <div class="popup__content">
        <h2 class="popup__step">Шаг {{ number }} из 12</h2>
        <svg
          @click="popupClose"
          class="popup__close"
          width="16"
          height="16"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.93934"
            y1="25.9393"
            x2="25.9393"
            y2="1.93934"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="2.06066"
            y1="1.93934"
            x2="26.0607"
            y2="25.9393"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <h3 class="popup__question">Как Вас зовут?</h3>
        <form @submit.prevent="" class="popup__form" novalidate>
          <input
            v-model="answer"
            type="text"
            class="popup__input"
            placeholder="Напишите тут"
          />
          <div class="popup__button">
            <button
              @click="prevQuestion"
              type
              class="popup__button popup__button_left"
            >
              Назад
            </button>
            <button
              @click="nextQuestion"
              type
              class="popup__button popup__button_right"
            >
              Далее
            </button>
          </div>
        </form>
      </div>
    </div>
  </ui-overlay>
</template>

<script>
import UiOverlay from '~/components/ui/Overlay';

export default {
  components: {
    UiOverlay,
  },
  data() {
    return {
      answer: '',
      number: 1,
    };
  },
  methods: {
    popupClose() {
      this.$store.commit('popup/popupClose');
    },
    nextQuestion() {},
    prevQuestion() {},
  },
};
</script>

<style>
.popup__content {
  width: 920px;
  height: 600px;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  padding: 40px 40px;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(2, 50%);
  grid-template-areas:
    'step close'
    'question question'
    'form form';
}

.popup__step {
  height: 36px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  grid-area: step;
}

.popup__close {
  cursor: pointer;
  grid-area: close;
  justify-self: end;
}

.popup__question {
  height: 24px;
  margin: 0;
  margin-top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  grid-area: question;
}

.popup__form {
  grid-area: form;
}

.popup__input {
  width: 100%;
  height: 24px;
  border: 0;
  border-bottom: 1px solid #e7e7e7;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding-bottom: 10px;
  box-sizing: border-box;
  margin-bottom: 200px;
  margin-top: 134px;
  outline: none;
}

.popup__button {
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  outline: none;
}

.popup__button_left {
  font-weight: normal;
  color: #c0c0c0;
  border: 0;
  outline: none;
}

.popup__button_right {
  width: 226px;
  height: 52px;
  background: #714dbd;
  font-weight: 500;
  color: #fff;
}
</style>
