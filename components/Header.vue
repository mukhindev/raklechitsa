<template>
  <header class="header">
    <nuxt-link class="header__logo" to="/" v-if="$route.path !== '/'"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h2 v-else class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <nuxt-link
            to="/"
            class="header-link"
            v-on:click.native="activeLink"
            :style="activePageMain"
            >Главная</nuxt-link
          >
        </li>
        <li class="header__nav-item">
          <nuxt-link
            to="/stories"
            class="header-link"
            v-on:click.native="activeLink"
            :style="activePageStories"
            >Истории</nuxt-link
          >
        </li>
        <li class="header__nav-item">
          <button class="header-link-tell-stories">Рассказать историю</button>
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
  computed: {
    activePageMain() {
      if (this.$route.path === '/') {
        return { color: '#613a93', borderBottom: '2px solid #613a93' };
      }
    },
    activePageStories() {
      if (this.$route.path === '/stories') {
        return { color: '#613a93', borderBottom: '2px solid #613a93' };
      }
    },
  },
  methods: {
    activeLink(e) {
      if (this.$route.path === '/') {
        e.target.classList.add('header-link_active');
        console.log(this.$refs.linkMain);
      } else if (this.$route.path === '/stories') {
        e.target.classList.add('header-link_active');
      }
    },
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
  padding: 18px 0;
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

.header-link {
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

.header-link:hover {
  color: #613a93;
  border-bottom: 2px solid #613a93;
}

.header-link_active {
  color: #613a93;
  border-bottom: 2px solid #613a93;
}

.header-link-tell-stories {
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

.header-link-tell-stories:hover {
  color: #613a93;
  border: 3px solid #613a93;
  background-color: #fff;
}
</style>
