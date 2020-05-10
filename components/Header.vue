<template>
  <header class="header page__header">
    <nuxt-link class="header__logo" to="/" v-if="$route.path !== '/'"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h2 v-else class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <nuxt-link to="/" class="header__link">Главная</nuxt-link>
        </li>
        <li class="header__nav-item">
          <nuxt-link to="/stories" class="header__link">Истории</nuxt-link>
        </li>
        <li class="header__nav-item">
          <button @click="$emit('popupOpen')" class="header__link-tell-stories">
            Рассказать историю
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-style: normal;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page__header {
  padding: 18px 50px;
}

.header__logo {
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  max-width: 340px;
  text-decoration: none;
  margin: 0;
}
.header__nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}
.header__nav-item:not(:last-child) {
  margin-right: 40px;
}
.header__link {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  font-size: 18px;
  line-height: 1.3;
  color: #000000;
  transition: all 0.5s ease;
  border-bottom: 2px solid transparent;
}
.header__link:hover {
  color: #613a93;
  border-bottom: 2px solid #613a93;
}
.nuxt-link-exact-active {
  color: #613a93;
  border-bottom: 2px solid #613a93;
}
.header__link-tell-stories {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-style: normal;
  width: 280px;
  min-height: 40px;
  outline: none;
  border: none;
  background-color: #613a93;
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
  color: #fff;
  padding: 0;
  cursor: pointer;
  border: 3px solid #fff;
  transition: all 0.3s ease;
}
.header__link-tell-stories:hover {
  color: #613a93;
  border: 3px solid #613a93;
  background-color: #fff;
}
</style>
