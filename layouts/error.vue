<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404" class="error__title">
      Страница не найдена
    </h1>
    <h1 v-else class="error__title">Произошла ошибка</h1>
    <nuxt-link class="error__link" to="/"
      >Вернуться на главную страницу</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty',
};
</script>
