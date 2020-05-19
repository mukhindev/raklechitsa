<template>
  <ui-overlay>
    <div class="popup">
      <div v-if="header" class="popup__header">
        <h2
          v-if="title"
          class="popup__title"
          :class="{ popup__title_center: titleCenter }"
        >
          {{ title }}
        </h2>
        <button
          class="popup__button-close"
          type="button"
          @click="formClose"
          title="Закрыть окно"
        ></button>
      </div>
      <p v-if="description" class="popup__description">{{ description }}</p>
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
    header: Boolean,
    title: String,
    description: String,
    closeButton: String,
    titleCenter: Boolean,
  },
  methods: {
    formClose() {
      if (this.closeButton) {
        this.$store.commit(`popup/${this.closeButton}`);
      }
    },
  },
};
</script>

<style>
.popup {
  box-sizing: border-box;
  width: 100%;
  max-width: 920px;
  padding: 40px;
  margin: auto;
  background-color: #fff;
}

@media screen and (max-width: 425px) {
  .popup {
    padding: 15px;
  }
}

.popup__header {
  padding: 0 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.popup__title {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
}

@media screen and (max-width: 1280px) {
  .popup__title {
    font-size: 28px;
  }
}

@media screen and (max-width: 768px) {
  .popup__title {
    font-size: 26px;
  }
}

@media screen and (max-width: 768px) {
  .popup__title {
    font-size: 18px;
  }
}

.popup__description {
  margin: 0 0 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
}

@media screen and (max-width: 1280px) {
  .popup__description {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .popup__description {
    font-size: 15px;
  }
}

@media screen and (max-width: 425px) {
  .popup__description {
    font-size: 13px;
  }
}

.popup__title_center {
  padding-left: 32px; /* Компенсация кнопки справа */
  width: 100%;
  text-align: center;
}
.popup__button-close {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  background: none;
  background-image: url('~assets/images/cross.svg');
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-left: auto;
  transition: 0.25s;
}

@media screen and (max-width: 1280px) {
  .popup__button-close {
    width: 32px;
    height: 32px;
    background-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .popup__button-close {
    width: 24px;
    height: 24px;
    background-size: 15px;
  }
}

@media screen and (max-width: 425px) {
  .popup__button-close {
    width: 20px;
    height: 20px;
    background-size: 13px;
  }
}

.popup__button-close:focus {
  outline: 1px solid #613a93;
}
</style>
