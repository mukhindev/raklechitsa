<template>
  <ui-popup header :title="title" :titleCenter="sent" closeButton="quizClose">
    <div class="form-quiz">
      <form v-if="!sent" type="submit" class="form-quiz__form" name="FormQuiz">
        <div class="form-quiz__question-wrapper">
          <h3 class="form-quiz__question">
            {{ questions[number - 1].question }}
            <span class="form-quiz__question-extra">{{
              questions[number - 1].questionExtra
            }}</span>
          </h3>
          <ui-input
            v-model="answers[number - 1]"
            :value="answers[number - 1]"
            placeholder="Напишите тут"
            type="text"
          />
        </div>
        <div class="form-quiz__submit">
          <ui-button white @click="prevQuestion" :disabled="disactiveButtonBack"
            >Назад
          </ui-button>
          <ui-button
            v-if="!lastQuestion"
            @click="nextQuestion"
            class="form-quiz__button"
          >
            Далее
          </ui-button>
          <ui-button
            v-if="lastQuestion"
            @click.once="send"
            class="form-quiz__button"
            :waiting="waiting"
            >Отправить</ui-button
          >
          <block-policy-warning v-if="lastQuestion" />
        </div>
      </form>
      <ui-button v-else @click="quizClose" class="form-quiz__button-close"
        >Закрыть</ui-button
      >
    </div>
  </ui-popup>
</template>

<script>
import UiPopup from '~/components/ui/Popup';
import UiInput from '~/components/ui/Input';
import UiButton from '~/components/ui/Button';
import BlockPolicyWarning from '~/components/blocks/PolicyWarning';

export default {
  components: {
    'ui-popup': UiPopup,
    'ui-input': UiInput,
    'ui-button': UiButton,
    'block-policy-warning': BlockPolicyWarning,
  },
  data() {
    return {
      answers: [],
      number: 1,
      sent: false,
      waiting: false,
      buttonBackDisabled: false,
    };
  },
  computed: {
    disactiveButtonBack() {
      if (this.number <= 1) return true;
      else return false;
    },
    questions() {
      return this.$store.getters['quiz/getQuestions'];
    },
    answerKeys() {
      return this.questions.map(el => el.answerKey);
    },
    lastQuestion() {
      return this.questions.length === this.number;
    },
    title() {
      if (!this.sent) return `Шаг ${this.number} из ${this.questions.length}`;
      else return 'Спасибо что приняли участие!';
    },
  },
  methods: {
    nextQuestion() {
      if (!this.lastQuestion) this.number++;
    },
    prevQuestion() {
      if (this.number > 1) this.number--;
    },
    async send() {
      const promise = await new Promise((resolve, reject) => {
        this.waiting = true;
        setTimeout(() => resolve(), 1700); // имитация сервера
      });
      this.waiting = false;
      this.sent = true;
      let result = {};
      this.answerKeys.forEach((key, index) => {
        result = { ...result, [key]: this.answers[index] || null };
      });
      console.log(result);
    },
    quizClose() {
      this.$store.commit(`popup/quizClose`);
    },
  },
};
</script>

<style scoped>
.form-quiz {
  min-height: 444px; /* Шапка и нижние поля  156px */
  display: flex;
}

.form-quiz__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-quiz__question {
  height: 128px;
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
}

@media screen and (max-width: 1280px) {
  .form-quiz__question {
    font-size: 16px;
  }
}

@media screen and (max-width: 425px) {
  .form-quiz__question {
    font-size: 13px;
  }
}

.form-quiz__question-extra {
  color: #666;
}

.form-quiz__submit {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  overflow: hidden;
}

@media screen and (max-width: 720px) {
  .form-quiz__submit {
    flex-direction: column;
    align-items: flex-start;
  }
}

.form-quiz__button {
  width: 226px;
  margin: 0 30px;
}

@media screen and (max-width: 768px) {
  .form-quiz__button {
    width: 200px;
    margin: 0 30px;
  }
}

@media screen and (max-width: 720px) {
  .form-quiz__button {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
}

.form-quiz__button-close {
  width: 226px;
  align-self: flex-end;
  margin: 0 auto;
}
</style>
