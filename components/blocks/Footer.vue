<template>
  <footer class="footer">
    <ui-container class="footer__container">
      <div class="footer__navigation">
        <h2 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h2>
        <nav class="footer__menu">
          <ul class="footer__links">
            <li>
              <nuxt-link to="/" class="footer__link">Главная</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/stories" class="footer__link">Истории</nuxt-link>
            </li>
          </ul>
        </nav>
        <ul class="footer__social-list">
          <li class="footer__social-link">
            Мы в
            <a
              class="footer__social-away"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              class="footer__social-away"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
              >Youtube</a
            >
          </li>
          <li>
            <button class="footer__social-link" @click="shareOpen">
              Поделитесь &#8599;
            </button>
          </li>
        </ul>
      </div>
      <div class="footer__copyright">
        <p class="footer__project-name">Рак Лечится {{ year }}</p>
        <a class="footer__author" href="https://praktikum.yandex.ru/"
          >Сделано студентами Яндекс Практикум</a
        >
      </div>
    </ui-container>
  </footer>
</template>

<script>
import Container from '~/components/ui/Container';

export default {
  components: {
    'ui-container': Container,
  },
  methods: {
    shareOpen() {
      this.$store.commit('popup/shareOpen');
    },
  },
  data() {
    return {
      year: new Date(2020, 4).getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  background: #fbfbfb;
}

.footer__container {
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
}

.footer__title {
  max-width: 340px;
  margin-right: 113px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
}

.footer__navigation {
  display: flex;
  margin-bottom: 110px;
}

.footer__menu {
  margin-right: 379px;
}

.footer__links {
  list-style: none;
  display: flex;
  padding-left: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.footer__link {
  margin-right: 40px;
  text-decoration: none;
  color: black;
  font-size: 1.125rem;
  line-height: 1.3;
}

ul.footer__links li:last-child a {
  margin-right: 0;
}

.footer__social-list {
  list-style: none;
  padding-left: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

.footer__social-link {
  text-decoration: none;
  color: black;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 40px;
  display: block;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: #fbfbfb;
}

.footer__social-away {
  color: black;
  font-size: 1.125rem;
  line-height: 1.3;
}

.footer__copyright {
  display: flex;
  justify-content: space-between;
}

.footer__project-name {
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 1.125rem;
  line-height: 1;
  color: #898989;
}

.footer__author {
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 1.125rem;
  line-height: 1;
  color: #898989;
  text-decoration: none;
}
</style>
