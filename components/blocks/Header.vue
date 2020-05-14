<template>
  <header class="header">
    <ui-container class="header__container">
      <nuxt-link class="header__logo" to="/" v-if="$route.path !== '/'"
        >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
      >
      <h2 v-else class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </h2>
      <nav class="header__nav" ref="nav">
        <ul class="header__nav-list">
          <li class="header__nav-item" @click="handleBurger">
            <nuxt-link to="/" class="header__link">Главная</nuxt-link>
          </li>
          <li class="header__nav-item" @click="handleBurger">
            <nuxt-link to="/stories" class="header__link">Истории</nuxt-link>
          </li>
          <li class="header__nav-item" @click="handleBurger">
            <button @click="quizOpen" class="header__button-tell-stories">
              Рассказать историю
            </button>
          </li>
        </ul>
      </nav>
      <button
        ref="burger"
        type="button"
        @click="handleBurger"
        class="header__burger header__burger_3dx"
      >
        <div class="header__burger-box">
          <div class="header__burger-inner"></div>
        </div>
      </button>
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
    quizOpen() {
      this.$store.commit('popup/quizOpen');
    },
    handleBurger() {
      this.$refs.nav.classList.toggle('header__nav_non-active');
      this.$refs.burger.classList.toggle('header__burger_active');
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
  padding-left: 0;
  padding-right: 0;
  min-height: 72px;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
}

.header__logo {
  padding-left: 60px;
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  max-width: 340px;
  text-decoration: none;
  margin: 0;
}

.header__nav {
  justify-self: end;
  padding-right: 60px;
  display: block;
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

.header__burger {
  padding: 0;
  outline: none;
  display: none;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}

.header__burger:hover {
  opacity: 0.7;
}

.header__burger.header__burger_active:hover {
  opacity: 0.7;
}

.header__burger.header__burger_active .header__burger-inner,
.header__burger.header__burger_active .header__burger-inner::before,
.header__burger.header__burger_active .header__burger-inner::after {
  background-color: #000;
}

.header__burger-box {
  width: 32px;
  height: 27px;
  display: inline-block;
  position: relative;
}

.header__burger-inner {
  display: block;
  top: 50%;
}
.header__burger-inner,
.header__burger-inner::before,
.header__burger-inner::after {
  width: 32px;
  height: 3px;
  background-color: #000;
  border-radius: 3px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.header__burger-inner::before,
.header__burger-inner::after {
  content: '';
  display: block;
}
.header__burger-inner::before {
  top: -10px;
}
.header__burger-inner::after {
  bottom: -10px;
}

.header__burger_3dx .header__burger-box {
  perspective: 80px;
}

.header__burger_3dx .header__burger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.header__burger_3dx .header__burger-inner::before,
.header__burger_3dx .header__burger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.header__burger_3dx.header__burger_active .header__burger-inner {
  background-color: transparent !important;
  transform: rotateY(-180deg);
}
.header__burger_3dx.header__burger_active .header__burger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.header__burger_3dx.header__burger_active .header__burger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

@media screen and (max-width: 1280px) {
  .header__button-tell-stories {
    font-size: 16px;
  }
  .header__link {
    font-size: 16px;
    line-height: 24px;
  }
  .header__logo {
    font-size: 16px;
    line-height: 18px;
    padding-left: 50px;
  }
  .header__nav {
    padding-right: 50px;
  }
  .header {
    border-bottom: 0;
  }
}

@media screen and (max-width: 1024px) {
  .header__nav-item:not(:last-child) {
    margin-right: 30px;
  }
}

@media screen and (max-width: 768px) {
  .header__burger {
    display: block;
    grid-column: 2;
    grid-row: 2;
    justify-self: end;
    padding-right: 50px;
  }
  .header__nav {
    grid-column: 1 / 3;
    width: -webkit-fill-available;
    grid-row: 1;
    padding-bottom: 18px;
    padding-top: 18px;
    border-bottom: 1px solid #e8e8e8;
    padding-left: 50px;
    display: none;
  }
  .header__logo {
    grid-column: 1;
    grid-row: 2;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .header__container {
    padding-top: 0;
    padding-bottom: 0;
  }
}

@media screen and (max-width: 425px) {
  .header__burger {
    padding-right: 15px;
  }
  .header__nav {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 13px;
    line-height: 16px;
  }
  .header__logo {
    padding-left: 15px;
    font-size: 12px;
    line-height: 14px;
    max-width: 216px;
  }

  .header__nav-list {
    display: block;
  }
  .header__link {
    font-size: 12px;
    line-height: 14px;
  }
  .header__nav-item:not(:last-child) {
    margin-bottom: 18px;
  }
  .header__button-tell-stories {
    font-size: 12px;
    line-height: 14px;
  }
}

.header__nav_non-active {
  display: block;
}
</style>
