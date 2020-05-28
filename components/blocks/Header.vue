<template>
  <header class="header">
    <transition name="transition-slide">
      <ui-container
        v-if="burger && width < 921"
        class="header__container header__container_burger"
      >
        <block-menu
          quizButton
          class="header__menu"
          place="burger"
          @click.native="burger = false"
        />
      </ui-container>
    </transition>
    <ui-container class="header__container">
      <nuxt-link class="header__logo" to="/" v-if="$route.path !== '/'"
        >{{ block.title }}
      </nuxt-link>
      <h2 v-else class="header__logo">
        {{ block.title }}
      </h2>
      <block-menu
        v-if="width > 920"
        quizButton
        class="header__menu"
        place="header"
      />
      <button
        v-else
        type="button"
        @click="burger = !burger"
        :class="[
          'header__button-burger',
          { 'header__button-burger_active': burger },
        ]"
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
  border-bottom: 1px solid #efefef;
  min-height: 72px;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}

.header__container_burger {
  border-bottom: 1px solid #efefef;
  padding-top: 18px;
  padding-bottom: 18px;
}

.header__logo {
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  max-width: 340px;
  text-decoration: none;
  margin: 18px 0;
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

.header__button-burger {
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

.header__button-burger_active {
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

.header__button-burger:focus {
  outline: none;
}

.transition-slide-enter-active,
.transition-slide-leave-active {
  transition: all 0.25s;
}

.transition-slide-enter,
.transition-slide-leave-to {
  height: 0;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
