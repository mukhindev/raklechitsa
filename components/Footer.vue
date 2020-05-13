<template>
  <footer class="footer">
    <div class="footer__content">
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
              href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
              target="_blank"
              >Youtube</a
            >
          </li>
          <li>
            <button class="footer__social-link" href="#">Поделитесь ↗</button>
          </li>
        </ul>
      </div>
      <div class="footer__copyright">
        <p class="footer__project-name">Рак Лечится 2020</p>
        <p class="footer__author">Сделано студентами Яндекс Практикум</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  background: #fbfbfb;
}

.footer__content {
  max-width: 1440px;
  padding: 50px;
  display: flex;
  flex-direction: column;
}

.footer__title {
  max-width: 340px;
  margin-right: 8%;
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
  margin-right: 28%;
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
}

.footer__social-away {
  text-decoration: underline;
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
}
</style>
