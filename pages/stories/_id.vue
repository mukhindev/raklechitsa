<template>
  <section class="story">
    <ui-container class="story__container">
      <div class="story__lead">
        <img
          :src="`${url}${story.ImageUrl[0].url}`"
          :alt="`фото ${story.author}`"
          class="story__photo"
        />
        <div class="story__desc">
          <h3 class="story__person">{{ story.author }}:</h3>
          <p class="story__quote">«{{ story.title }}»</p>
        </div>
        <div class="story__misc">
          <a @click="shareOpen()" class="story__sharing-link"
            >Поделитесь &#8599;</a
          >
          <p class="story__date">{{ story.date | dateFormated }}</p>
        </div>
      </div>
      <div class="story__text" v-html="story.text"></div>
      <div class="story__link-after-text">
        <a @click="shareOpen()" class="story__sharing-link"
          >Поделитесь этой статьей в своих социальных сетях &#8599;</a
        >
      </div>
      <block-stories-grid :start="0" :limit="itemsToLoop" more />
      <!--TODO: не выводить карточку активной страницы -->
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import StoriesGrid from '~/components/blocks/StoriesGrid';

export default {
  head() {
    return {
      title: `РАКЛЕЧИТСЯ.РФ — ${this.story.author}`,
      meta: [
        { name: 'description', content: this.story.title },
        {
          name: 'keywords',
          content: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
        },
      ],
    };
  },
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'block-stories-grid': StoriesGrid,
  },
  validate({ params, store }) {
    if (store.getters['stories/getStoryById'](params.id)) return true;
    return false;
  },
  data() {
    return {
      width: null,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    story() {
      return this.$store.getters['stories/getStoryById'](this.id);
    },
    itemsToLoop() {
      if (this.width < 641) return 2;
      if (this.width > 768) return 4;
      if (this.width <= 768) return 3;
    },
    url() {
      return process.env.baseUrl;
    },
  },
  methods: {
    resizeDetector(e) {
      this.width = e.target.innerWidth;
    },
    shareOpen() {
      this.$store.commit('popup/shareOpen');
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeDetector);
    this.width = window.innerWidth;
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeDetector);
  },
  filters: {
    dateFormated: function(value) {
      const date = new Date(value);
      const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
      ];
      const d = date.getDate();
      const m = months[date.getMonth()];
      const y = date.getFullYear();
      return `${d} ${m} ${y}`;
    },
  },
};
</script>

<style scoped>
.story {
  padding: 100px 20px;
}
@media screen and (max-width: 768px) {
  .story {
    padding: 80px 24px;
  }
}
@media screen and (max-width: 320px) {
  .story {
    padding: 50px 0;
  }
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
@media screen and (max-width: 1024px) {
  .story__lead {
    margin: 0 0 90px;
  }
}
@media screen and (max-width: 768px) {
  .story__lead {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 100%;
    grid-template-areas:
      'desc'
      'photo'
      'misc';
    margin: 0 0 100px;
  }
}
@media screen and (max-width: 320px) {
  .story__lead {
    margin: 0 0 40px;
  }
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
    max-width: 407px;
  }
}
@media screen and (max-width: 768px) {
  .story__photo {
    max-width: 420px;
    justify-self: center;
    margin: 60px 0;
  }
}
@media screen and (max-width: 320px) {
  .story__photo {
    width: 100%;
    max-width: 290px;
    justify-self: center;
    margin: 30px 0;
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
@media screen and (max-width: 768px) {
  .story__desc {
    text-align: center;
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
@media screen and (max-width: 320px) {
  .story__person {
    font-size: 18px;
    line-height: 1.17;
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
@media screen and (max-width: 320px) {
  .story__quote {
    font-size: 18px;
    line-height: 1.17;
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
@media screen and (max-width: 1280px) {
  .story__text {
    font-size: 20px;
    line-height: 1.4;
    max-width: 720px;
    margin: 0 auto 60px;
  }
}
@media screen and (max-width: 1024px) {
  .story__text {
    font-size: 18px;
    line-height: 1.5;
    max-width: 640px;
    margin: 0 auto 46px;
  }
}
@media screen and (max-width: 768px) {
  .story__text {
    margin: 0 auto 80px;
  }
}
@media screen and (max-width: 320px) {
  .story__text {
    font-size: 13px;
    line-height: 1.23;
    margin: 0 auto 40px;
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
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
}
@media screen and (max-width: 1023px) {
  .story__sharing-link {
    font-size: 16px;
    line-height: 1.5;
  }
}
@media screen and (max-width: 320px) {
  .story__sharing-link {
    font-size: 13px;
    line-height: 1.23;
  }
}

.story__sharing-link:hover {
  cursor: pointer;
  color: #613a93;
  border-bottom: 1px solid #613a93;
}

.story__link-after-text {
  max-width: 780px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  text-align: center;
  margin: 0 auto 160px;
}
@media screen and (max-width: 1280px) {
  .story__link-after-text {
    max-width: 720px;
    margin: 0 auto 150px;
  }
}
@media screen and (max-width: 1024px) {
  .story__link-after-text {
    padding-top: 24px;
    padding-bottom: 24px;
    max-width: 640px;
    margin: 0 auto 120px;
  }
}
@media screen and (max-width: 320px) {
  .story__link-after-text {
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto 100px;
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
@media screen and (max-width: 320px) {
  .story__date {
    font-size: 13px;
    line-height: 1.23;
  }
}
</style>
