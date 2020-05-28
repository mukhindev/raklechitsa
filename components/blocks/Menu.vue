<template>
  <nav class="menu">
    <ul :class="['menu__links', mod('menu__links_place_')]">
      <li :class="['menu__item', mod('menu__item_place_')]">
        <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
      </li>
      <li v-if="quizButton" class="menu__item">
        <button @click="quizOpen" class="menu__button">
          Рассказать историю
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    quizButton: Boolean,
    place: String,
  },
  computed: {
    // Класс модификатор элемента
    mod() {
      return function(element) {
        return [this.place ? `${element}${this.place}` : ''];
      };
    },
  },
  methods: {
    quizOpen() {
      this.$store.commit('popup/quizOpen');
    },
  },
};
</script>

<style scoped>
.menu__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

@media screen and (max-width: 425px) {
  .menu__links_place_burger {
    flex-direction: column;
    margin-right: 0x;
  }
}

@media screen and (max-width: 920px) {
  .menu__links_place_footer {
    flex-direction: column;
    margin-right: 0x;
  }
}

@media screen and (max-width: 1280px) {
  .footer__menu {
    margin-left: 102px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__menu {
    margin-left: 30px;
  }
}

@media screen and (max-width: 720px) {
  .footer__menu {
    margin-top: 50px;
    margin-left: 0;
  }
}

.menu__item {
  margin-right: 40px;
}

@media screen and (max-width: 1024px) {
  .menu__item {
    margin-right: 30px;
  }
}

@media screen and (max-width: 425px) {
  .menu__item {
    margin-right: 0px;
    padding-bottom: 18px;
  }
}

@media screen and (max-width: 920px) {
  .menu__item_place_footer {
    padding-bottom: 18px;
  }
}

.menu__item:last-of-type {
  margin: 0;
  padding: 0;
}

.menu__link {
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
  text-decoration: none;
  color: #000;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
}

.menu__link:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 425px) {
  .menu__link {
    font-size: 13px;
  }
}

.menu__button {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  padding: 0;
  border: none;
  background: none;
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
  color: #000;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
}

@media screen and (max-width: 1280px) {
  .menu__button {
    font-size: 16px;
  }
}

@media screen and (max-width: 425px) {
  .menu__button {
    font-size: 13px;
  }
}

.menu__button:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}
.menu__button:focus {
  outline-style: none;
}

.nuxt-link-exact-active {
  color: #000;
  border-bottom: 1px solid #000;
}
</style>
