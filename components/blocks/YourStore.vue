<template>
  <div>
    <section class="your-story">
      <ui-container class="your-story__container">
        <div class="your-story__colunms">
          <ui-heading class="your-story__heading">
            <template #title>{{ block.title }}</template>
            <template #subtitle><div v-html="block.text"></div></template>
          </ui-heading>
          <ui-tabs :tabs="tabs" :height="150">
            <template #1>
              <button-type class="your-story__button-type" @click="quizOpen"
                >Заполнить форму</button-type
              >
            </template>
            <template #3>
              <button-type
                @click="yourContactsOpen"
                class="your-story__button-type"
                >Оставить контакт</button-type
              >
            </template>
          </ui-tabs>
        </div>
      </ui-container>
    </section>
  </div>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import Tabs from '~/components/ui/Tabs';
import Button from '~/components/ui/Button';

export default {
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'ui-tabs': Tabs,
    'button-type': Button,
  },
  computed: {
    block() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'story');
    },
    tabs() {
      return this.block.extraTexts;
    },
  },
  methods: {
    changeText(event) {
      if (event.target.classList.contains('your-story__btn_first')) {
        this.isActiveButtonSecond = false;
        this.isActiveButtonFirst = true;
      }
      if (event.target.classList.contains('your-story__btn_second')) {
        this.isActiveButtonFirst = false;
        this.isActiveButtonSecond = true;
      }
    },
    quizOpen() {
      this.$store.commit('popup/quizOpen');
    },
    yourContactsOpen() {
      this.$store.commit('popup/yourContactsOpen');
    },
  },
};
</script>

<style scoped>
.your-story {
  background-color: #f7f7f7;
}

.your-story__container {
  padding-top: 90px;
  padding-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .your-story__container {
    padding: 80px 40px 80px;
  }
}

@media screen and (max-width: 425px) {
  .your-story__container {
    padding: 50px 15px 50px;
  }
}

.your-story__colunms {
  display: flex;
}

@media screen and (max-width: 768px) {
  .your-story__colunms {
    flex-direction: column;
    align-items: center;
  }
  .your-story__heading {
    margin: 0 0 80px;
  }
}

@media screen and (max-width: 425px) {
  .your-story__heading {
    margin: 0 0 40px;
  }
}

.your-story__button-type {
  width: 280px;
}

@media screen and (max-width: 1280px) {
  .your-story__button-type {
    width: 230px;
    min-height: 48px;
    font-size: 16px;
    line-height: 19px;
  }
}
@media screen and (max-width: 1024px) {
  .your-story__button-type {
    width: 230px;
    min-height: 48px;
    font-size: 16px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .your-story__button-type {
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 425px) {
  .your-story__button-type {
    font-size: 13px;
    line-height: 16px;
    width: 100%;
    min-height: 40px;
    margin: auto;
  }
}
</style>
