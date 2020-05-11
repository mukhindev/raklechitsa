<template>
  <header class="header">
    <ui-container class="header__container">
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
            <button @click="popupOpen" class="header__button-tell-stories">
              Рассказать историю
            </button>
          </li>
        </ul>
      </nav>
    </ui-container>
  </header>
</template>

<script>
import Container from '~/components/ui/Container';

export default {
  components: {
    'ui-container': Container,
  },
  methods: {
    popupOpen() {
      this.$store.commit('popup/popupOpen');
    },
  },
};
</script>

<style scoped>
.header {
  font-weight: normal;
  font-style: normal;
  border-bottom: 1px solid #e8e8e8;
}

.header__container {
  padding-top: 18px;
  padding-bottom: 18px;
  min-height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
  text-decoration: none;
  color: #000000;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
}

@media screen and (max-width: 1280px) {
  .header__link {
    font-size: 16px;
  }
}

.header__link:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}
.nuxt-link-exact-active {
  color: #000000;
  border-bottom: 1px solid #000000;
}
.header__button-tell-stories {
  padding: 0;
  border: none;
  background: none;
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
  color: #000000;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
}
.header__button-tell-stories:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}
.header__button-tell-stories:focus {
  outline-style: none;
}

@media screen and (max-width: 1280px) {
  .header__button-tell-stories {
    font-size: 16px;
  }
}
</style>
