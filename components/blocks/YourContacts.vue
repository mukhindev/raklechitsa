<template>
  <ui-popup
    header
    :title="title"
    :description="description"
    closeButton="yourContactsClose"
  >
    <form type="submit" class="form-contacts" name="FormContacts">
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
        v-model="contacts.mail"
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
        required
      />
      <div class="form-contacts__submit">
        <ui-button @click="send" class="form-contacts__button"
          >Отправить</ui-button
        >
        <block-policy-warning />
      </div>
    </form>
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
      title: 'Оставьте контакт для связи',
      description:
        'Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.',
      contacts: {
        name: '',
        mail: '',
        tel: '',
        comment: '',
      },
    };
  },
  methods: {
    send() {
      console.log('Отправить контакты', this.contacts);
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

.form-contacts__input_full-width {
  grid-column: 1 / -1;
}

.form-contacts__submit {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
}

.form-contacts__button {
  width: 226px;
  margin-right: 30px;
}
</style>
