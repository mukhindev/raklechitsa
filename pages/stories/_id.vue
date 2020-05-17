<template>
  <section class="story">
    <ui-container class="story__container">
      <div class="story__lead">
        <img
          :src="story.photo"
          :alt="`фото ${story.person}`"
          class="story__photo"
        />
        <!-- <div class="story__intro"> -->
        <div class="story__desc">
          <h3 class="story__person">{{ story.person }}:</h3>
          <p class="story__quote">«{{ story.quote }}»</p>
        </div>
        <div class="story__misc">
          <a href="#" class="story__sharing-link">Поделитесь &#8599;</a>
          <p class="story__date">20 апреля 2018</p>
        </div>
        <!-- </div> -->
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
  padding: 100px 20px;
}
.story__lead {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'photo desc'
    'photo misc';
  margin: 0 0 130px;
}

.story__photo {
  width: calc(100% - 60px);
  max-width: 580px;
  margin: 0;
  object-fit: contain;
  object-position: top;
  grid-area: photo;
}

@media screen and (max-width: 1024px) {
  .story__photo {
    width: calc(100% - 40px);
  }
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

.story__desc {
  padding-top: 30px;
  border-top: 1px solid #efefef;
  grid-area: desc;
}
@media screen and (max-width: 1024px) {
  .story__desc {
    padding-top: 20px;
  }
}

.story__person {
  display: inline;
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.26;
}
@media screen and (max-width: 1024px) {
  .story__person {
    font-size: 30px;
  }
}

.story__quote {
  display: inline;
  margin: 0;
  font-weight: 500;
  font-size: 38px;
  line-height: 1.26;
}
@media screen and (max-width: 1024px) {
  .story__quote {
    font-size: 30px;
  }
}

.story__text {
  max-width: 780px;
  margin: 0 auto 70px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 1.36;
}
@media screen and (max-width: 1023px) {
  .story__text {
    font-size: 18px;
    line-height: 1.5;
    max-width: 640px;
    margin: 0 auto 70px;
  }
}

.story__misc {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
  grid-area: misc;
  align-self: end;
}
@media screen and (max-width: 1024px) {
  .story__misc {
    padding-bottom: 20px;
  }
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
@media screen and (max-width: 1023px) {
  .story__sharing-link {
    font-size: 16px;
    line-height: 1.5;
  }
}

.story__date {
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
}
@media screen and (max-width: 1023px) {
  .story__date {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
