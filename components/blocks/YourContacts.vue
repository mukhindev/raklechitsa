<template>
  <ui-popup
    header
    :title="title"
    :description="description"
    closeButton="yourContactsClose"
  >
    <form
      v-if="!sent"
      type="submit"
      @submit.prevent="send"
      class="form-contacts"
      name="FormContacts"
    >
      <ui-input
        class="form-contacts__input form-contacts__input_full-width"
        v-model="contacts.name"
        label="Как вас зовут?"
        placeholder="Напишите тут"
        name="name"
        type="text"
        required
      />
      <ui-input
        v-model="contacts.email"
        label="Электронная почта"
        placeholder="pochta@example.com"
        name="email"
        type="email"
        required
      />
      <ui-input
        v-model="contacts.tel"
        label="Телефон"
        placeholder="+7 000 000 00 00"
        name="tel"
        type="tel"
        required
      />
      <ui-input
        class="form-contacts__input form-contacts__input_full-width"
        v-model="contacts.comment"
        label="Напишите, если есть предпочтительный способ связи и удобное время"
        placeholder="Телефон / почта и удобное время"
        name="comment"
        type="text"
      />
      <div class="form-contacts__submit">
        <ui-button
          type="submit"
          class="form-contacts__button"
          :waiting="waiting"
          >Отправить</ui-button
        >
        <block-policy-warning />
      </div>
    </form>
    <ui-button
      v-else
      @click="yourContactsClose"
      class="form-contacts__button-close"
      >Закрыть</ui-button
    >
  </ui-popup>
</template>

<script>
import Popup from '~/components/ui/Popup';
import Input from '~/components/ui/Input';
import Button from '~/components/ui/Button';
import BlockPolicyWarning from '~/components/blocks/PolicyWarning';

export default {
  components: {
    'ui-popup': Popup,
    'ui-input': Input,
    'ui-button': Button,
    'block-policy-warning': BlockPolicyWarning,
  },
  data() {
    return {
      description:
        'Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.',
      contacts: {
        name: '',
        email: '',
        tel: '',
        comment: '',
      },
      sent: false,
      waiting: false,
    };
  },
  computed: {
    title() {
      if (!this.sent) return 'Оставьте контакт для связи';
      else return 'Спасибо!';
    },
  },
  methods: {
    async send() {
      const promise = await new Promise((resolve, reject) => {
        this.waiting = true;
        setTimeout(() => resolve(), 1700); // имитация сервера
      });
      this.waiting = false;
      this.sent = true;
      const { name, email, tel, comment } = this.contacts;
      const result = {
        fullName: name,
        email,
        phone: tel,
        preferred: comment,
      };
      console.log(result);
    },
    yourContactsClose() {
      this.$store.commit(`popup/yourContactsClose`);
    },
  },
};
</script>

<style scoped>
.form-contacts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

@media screen and (max-width: 720px) {
  .form-contacts {
    grid-template-columns: repeat(1, 1fr);
  }
}

.form-contacts__input_full-width {
  grid-column: 1 / -1;
}

.form-contacts__submit {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 720px) {
  .form-contacts__submit {
    flex-direction: column;
    align-items: flex-start;
  }
}

.form-contacts__button {
  width: 226px;
  margin-right: 30px;
}

@media screen and (max-width: 720px) {
  .form-contacts__button {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
}

.form-contacts__button-close {
  width: 226px;
  display: block;
  margin: 0 auto;
}
</style>
