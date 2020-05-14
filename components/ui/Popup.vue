<template>
  <ui-overlay>
    <div class="popup">
      <div class="popup__header">
        <h3 class="popup__title">Оставьте контакт для связи</h3>
        <button
          class="popup__button-close"
          type="button"
          @click="formClose"
        ></button>
      </div>
      <p v-if="description" class="popup__description">
        Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей
        истории и разместить ее на сайте.
      </p>
      <slot></slot>
    </div>
  </ui-overlay>
</template>

<script>
import UiOverlay from '~/components/ui/Overlay';

export default {
  components: {
    'ui-overlay': UiOverlay,
  },
  props: {
    title: String,
    description: String,
  },
  methods: {
    formClose() {},
  },
};
</script>

<style>
.popup {
  width: 100%;
  max-width: 920px;
  padding: 40px;
  background-color: #fff;
}
.popup__header {
  padding: 0 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__description {
  margin: 0 0 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
}
.popup__title {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
}
.popup__button-close {
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  background: none;
  background-image: url('/images/ui/cross.svg');
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.25s;
}
.popup__button-close:focus {
  outline: 1px solid #613a93;
}
</style>
