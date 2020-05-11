<template>
  <section class="story">
    <ui-container class="story__container">
      <div class="story__lead">
        <img
          :src="story.photo"
          :alt="`фото ${story.person}`"
          class="story__photo"
        />
        <div class="story__intro">
          <div class="story__desc">
            <h3 class="story__person">{{ story.person }}:</h3>
            <p class="story__quote">«{{ story.quote }}»</p>
          </div>
          <div class="story__misc">
            <a href="#" class="story__sharing-link">Поделитесь ↗</a>
            <p class="story__date">20 апреля 2018</p>
          </div>
        </div>
      </div>
      <div class="story__text">
        {{ story.story }}
      </div>
      <!--TODO: ссылка "Поделитесь этой статьей ↗" под текстом  -->
      <block-stories-grid start="0" limit="4" more />
      <!--TODO: не выводить карточку активной страницы -->
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import StoriesGrid from '~/components/blocks/StoriesGrid';

export default {
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'block-stories-grid': StoriesGrid,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    story() {
      return this.$store.getters['api/getStoryById'](this.id);
    },
  },
};
</script>

<style scoped>
.story {
  padding: 100px 60px;
}
.story__lead {
  display: flex;
  margin: 0 0 130px;
}
.story__photo {
  width: 50%;
  max-width: 580px;
  margin: 0 60px 0 0;
  object-fit: contain;
  object-position: top;
}
.story__intro {
  font-style: normal;
  font-weight: 500;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 30px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.story__person {
  display: inline;
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.26;
}
.story__quote {
  display: inline;
  margin: 0;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.26;
}
.story__text {
  max-width: 780px;
  margin: 0 auto 70px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 1.36;
}

.story__misc {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.story__sharing-link {
  text-decoration: none;
  color: black;
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
}
.story__date {
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
