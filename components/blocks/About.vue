<template>
  <section class="about">
    <ui-container class="about__container">
      <h3 class="about__tag">{{ block.hashtag }}</h3>
      <div class="about__colunms">
        <ui-heading class="about__heading" theme="dark">
          <template #title>{{ block.title }}</template>
          <template #subtitle><div v-html="block.text"></div></template>
        </ui-heading>
        <ui-tabs :tabs="tabs" :height="220" theme="dark" />
      </div>
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import Tabs from '~/components/ui/Tabs';

export default {
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'ui-tabs': Tabs,
  },
  computed: {
    block() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'about');
    },
    tabs() {
      return this.block.extraTexts;
    },
  },
};
</script>

<style scoped>
.about {
  background: #613a93;
  color: #fff;
}

.about__container {
  padding-top: 90px;
  padding-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .about__container {
    padding: 80px 40px 80px;
  }
}

@media screen and (max-width: 425px) {
  .about__container {
    padding: 50px 15px 50px;
  }
}

.about__tag {
  margin: 0 0 70px;
  font-weight: 800;
  font-size: 64px;
  line-height: 1.25;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .about__tag {
    display: none;
  }
}

.about__colunms {
  display: flex;
}

@media screen and (max-width: 768px) {
  .about__colunms {
    flex-direction: column;
    align-items: center;
  }
  .about__heading {
    margin: 0 0 80px;
  }
}

@media screen and (max-width: 425px) {
  .about__heading {
    margin: 0 0 40px;
  }
}
</style>
