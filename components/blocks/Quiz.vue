<template>
  <ui-overlay>
    <div class="popup">
      <div class="popup__finish" v-if="number === 13">
        <h2 class="popup__finish-title">Спасибо что приняли участие!</h2>
        <button @click="quizClose" class="popup__button-finish">
          Закрыть
        </button>
      </div>

      <div class="popup__content" v-else>
        <h2 class="popup__step">Шаг {{ number }} из 12</h2>
        <svg
          @click="quizClose"
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
        <h3 class="popup__question">
          {{ questions[number - 1].question
          }}<span class="popup__question-extra">
            {{ questions[number - 1].questionExtra }}</span
          >
        </h3>
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
              :disabled="disactiveButtonBack"
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
            <span class="popup__policy" v-if="policy"
              >Нажимая на кнопку «отправить», вы даете согласие на
              <span class="popup__policy-link" @click="openPolicy"
                >обработку персональных данных</span
              ></span
            >
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
      valuesOfInputs: [],
      buttonBackDisabled: false,
      policy: false,
    };
  },
  methods: {
    quizClose() {
      this.$store.commit('popup/quizClose');
    },
    nextQuestion() {
      if (this.number === 11) {
        this.policy = true;
      }
      const obj = {
        id: this.number,
        response: this.answer,
      };
      this.valuesOfInputs.push(obj);
      this.answer = '';
      this.number++;
    },
    prevQuestion() {
      this.number--;
      this.answer = this.valuesOfInputs[this.number - 1].response;
      this.valuesOfInputs.pop();
    },
    openPolicy() {
      let win = window.open('/policy', '_blank');
      win.focus();
    },
  },
  computed: {
    disactiveButtonBack() {
      if (this.number <= 1) {
        return true;
      }
    },
    questions() {
      return this.$store.getters['form/getQuestions'];
    },
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

.popup__question-extra {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666;
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
  outline: none;
}

.popup__button_left {
  font-weight: normal;
  color: #c0c0c0;
  border: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.popup__button_left:hover {
  color: #000;
}

.popup__button_left:disabled {
  color: #c0c0c0;
}

.popup__button_right {
  width: 226px;
  height: 52px;
  background: #714dbd;
  font-weight: 500;
  color: #fff;
  padding: 0;
  margin-left: 30px;
  cursor: pointer;
  transition: all 0.2s;
}

.popup__button_right:hover {
  opacity: 0.9;
}

.popup__policy {
  vertical-align: middle;
  display: inline-block;
  max-width: 378px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  margin-left: 30px;
}

.popup__policy-link {
  cursor: pointer;
  border-bottom: 1px solid #666;
  transition: all 0.2s;
}

.popup__policy-link:hover {
  opacity: 0.7;
}

.popup__finish {
  width: 920px;
  height: 600px;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.popup__finish-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #000;
  margin: 0;
}

.popup__button-finish {
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  width: 226px;
  height: 52px;
  background: #714dbd;
  font-weight: 500;
  color: #fff;
  padding: 0;
  margin-left: 30px;
  cursor: pointer;
  transition: all 0.2s;
}

.popup__button-finish:hover {
  opacity: 0.9;
}
</style>
