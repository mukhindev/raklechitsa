<template>
  <p class="policy-warning">
    Нажимая на кнопку «{{ button }}», вы даете согласие на
    <a class="policy-warning__link" href="/policy" target="_blank"
      >обработку персональных данных</a
    >
  </p>
</template>

<script>
export default {
  props: {
    button: {
      type: String,
      default: 'Отправить',
    },
  },
};
</script>

<style scoped>
.policy-warning {
  margin: 0;
  max-width: 378px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
}

@media screen and (max-width: 720px) {
  .policy-warning {
    max-width: none;
  }
}

.policy-warning__link {
  color: #666;
  transition: 0.25s;
}
.policy-warning__link:hover {
  opacity: 0.7;
}
</style>
