<template>
  <footer class="footer">
    <ui-container class="footer__container">
      <div class="footer__columns">
        <h2 class="footer__title">
          {{ block.title }}
        </h2>
        <block-menu class="footer__menu" place="footer" />
        <ul class="footer__social-list">
          <li class="footer__social-item">
            Мы в
            <a
              class="footer__social-link"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              class="footer__social-link"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
              >Youtube</a
            >
          </li>
          <li class="footer__social-item">
            <button class="footer__share-button" @click="shareOpen">
              Поделитесь &#8599;
            </button>
          </li>
        </ul>
      </div>
      <div class="footer__copyright">
        <p class="footer__project-name">{{ copyright }} {{ year }}</p>
        <a class="footer__author" href="https://praktikum.yandex.ru/"
          >Сделано студентами Яндекс Практикум</a
        >
      </div>
    </ui-container>
  </footer>
</template>

<script>
import Container from '~/components/ui/Container';
import Menu from '~/components/blocks/Menu';

export default {
  components: {
    'ui-container': Container,
    'block-menu': Menu,
  },
  methods: {
    shareOpen() {
      this.$store.commit('popup/shareOpen');
    },
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
    block() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'footer');
    },
    copyright() {
      return this.block.text.replace(/\<p\>|\<\/p\>/g, '');
    },
  },
};
</script>

<style scoped>
.footer {
  background: #fbfbfb;
}

.footer__container {
  padding-top: 60px;
  padding-bottom: 60px;
}

@media screen and (max-width: 1280px) {
  .footer__container {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.footer__columns {
  display: flex;
}

@media screen and (max-width: 720px) {
  .footer__columns {
    flex-direction: column;
  }
}

.footer__title {
  margin: 0;
  flex-shrink: 0;
  max-width: 340px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
}

@media screen and (max-width: 1280px) {
  .footer__title {
    max-width: 305px;
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__title {
    max-width: 305px;
    font-size: 24px;
  }
}

@media screen and (max-width: 768px) {
  .footer__title {
    max-width: 268px;
  }
}

@media screen and (max-width: 425px) {
  .footer__title {
    max-width: none;
    font-size: 18px;
  }
}

.footer__menu {
  margin-left: 113px;
  width: 100%;
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

.footer__social-list {
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 720px) {
  .footer__social-list {
    margin-top: 18px;
    margin-left: 0;
  }
}

.footer__social-item {
  margin-bottom: 44px;
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
}

@media screen and (max-width: 1280px) {
  .footer__social-item {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__social-item {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 768px) {
  .footer__social-item {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 425px) {
  .footer__social-item {
    margin-bottom: 18px;
    font-size: 13px;
  }
}

.footer__social-item:last-of-type {
  margin-bottom: 0;
}

.footer__social-link {
  text-decoration: none;
  color: #000;
  transition: all 0.25s ease;
  border-bottom: 1px solid #000;
}

.footer__social-link:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}

.footer__share-button {
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
  .footer__share-button {
    font-size: 16px;
  }
}

@media screen and (max-width: 425px) {
  .footer__share-button {
    font-size: 13px;
  }
}

.footer__share-button:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}
.footer__share-button:focus {
  outline-style: none;
}

.footer__copyright {
  margin: 110px 0 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 1.3;
}

@media screen and (max-width: 1280px) {
  .footer__copyright {
    margin: 110px 0 0;
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__copyright {
    margin: 90px 0 0;
  }
}

@media screen and (max-width: 720px) {
  .footer__copyright {
    flex-direction: column;
    margin: 50px 0 0;
    font-size: 13px;
  }
}

.footer__project-name {
  margin: 0;
  color: #898989;
  font-weight: normal;
  font-style: normal;
}

@media screen and (max-width: 720px) {
  .footer__project-name {
    flex-direction: column;
    margin: 0 0 18px;
    font-size: 13px;
  }
}

.footer__author {
  color: #898989;
  text-decoration: none;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
}

.footer__author:hover {
  color: #613a93;
  border-bottom: 1px solid #613a93;
}
</style>
