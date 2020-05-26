<template>
  <header class="header">
    <ui-container v-if="burger" class="header__container">
      <nav class="header__nav" @click="burger = !burger">
        <block-menu quizButton class="header__menu" />
      </nav>
    </ui-container>
    <ui-container class="header__container">
      <nuxt-link class="header__logo" to="/" v-if="$route.path !== '/'">{{
        block.title
      }}</nuxt-link>
      <h2 v-else class="header__logo">
        {{ block.title }}
      </h2>
      <nav v-if="width > 920" class="header__nav">
        <block-menu quizButton class="header__menu" />
      </nav>
      <button
        v-else
        type="button"
        @click="burger = !burger"
        class="header__burger"
        :class="{ header__burger_active: burger }"
      ></button>
    </ui-container>
  </header>
</template>

<script>
import Container from '~/components/ui/Container';
import Menu from '~/components/blocks/Menu';

export default {
  components: {
    'ui-container': Container,
    'block-menu': Menu,
  },
  data() {
    return {
      width: null,
      burger: false,
    };
  },
  methods: {
    resizeDetector(e) {
      this.width = e.target.innerWidth;
    },
  },
  computed: {
    block() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'header');
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeDetector);
    this.width = window.innerWidth;
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeDetector);
  },
};
</script>

<style scoped>
.header {
  font-weight: normal;
  font-style: normal;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #efefef;
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

@media screen and (max-width: 1280px) {
  .header__logo {
    font-size: 16px;
    line-height: 18px;
  }
}

@media screen and (max-width: 425px) {
  .header__logo {
    font-size: 12px;
    line-height: 14px;
    max-width: 216px;
  }
}

@media screen and (max-width: 425px) {
  .header__menu {
    flex-direction: column;
    margin-right: 0x;
  }
}

.header__burger {
  border: none;
  padding: 0;
  background-color: transparent;
  background-image: url('~assets/images/burger.svg');
  background-size: 32px 32px;
  background-position: center;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.header__burger_active {
  border: none;
  padding: 0;
  background-color: transparent;
  background-image: url('~assets/images/cross.svg');
  background-size: 32px 32px;
  background-position: center;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.header__burger:focus {
  outline: none;
}
</style>
