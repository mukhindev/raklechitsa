<template>
  <div class="stories-container">
    <ul v-if="stories.length > 0" class="stories-container__grid">
      <ui-card
        v-for="story in stories"
        :key="story.id"
        :link="`/stories/${story.id}`"
        :img="story.photo"
        :title="story.person"
        :text="story.quote"
      />
    </ul>
    <p v-else>Не найдено</p>
    <nuxt-link v-if="more" to="/stories" class="stories-container__button-more">
      <span class="stories-container__button-text">Больше статей</span>
    </nuxt-link>
  </div>
</template>

<script>
import Heading from '~/components/ui/Heading';
import Card from '~/components/ui/Card';

export default {
  components: {
    'ui-heading': Heading,
    'ui-card': Card,
  },
  props: {
    start: Number,
    limit: Number,
    more: Boolean,
    filter: String,
  },
  computed: {
    stories() {
      if (this.filter) return this.filterStore;
      return this.$store.getters['api/getStories'](this.start, this.limit);
    },
    filterStore() {
      return this.$store.getters['api/getStories'](
        this.start,
        this.limit
      ).filter(el => el.person.includes(this.filter));
    },
  },
};
</script>

<style scoped>
.stories {
  padding: 50px 60px;
}
.stories-container__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

@media screen and (max-width: 1024px) {
  .stories-container__grid {
    grid-gap: 40px 30px;
  }
}

@media screen and (max-width: 768px) {
  .stories-container__grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px 20px;
  }
}

@media screen and (max-width: 640px) {
  .stories-container__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 20px;
  }
}

@media screen and (max-width: 425px) {
  .stories-container__grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px 20px;
  }
}

.stories-container__button-more {
  color: #000;
  margin: 70px 0 0;
  padding: 31px 0;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  cursor: pointer;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .stories-container__button-more {
    margin: 60px 0 0;
    padding: 29px 0;
  }
}

@media screen and (max-width: 1024px) {
  .stories-container__button-more {
    margin: 46px 0 0;
    padding: 17px 0;
  }
}

@media screen and (max-width: 768px) {
  .stories-container__button-more {
    margin: 57px 0 0;
    padding: 17px 0;
  }
}

@media screen and (max-width: 425px) {
  .stories-container__button-more {
    margin: 40px 0 0;
    padding: 15px 0;
  }
}

.stories-container__button-more:hover {
  background-color: #f8f8f8;
}
.stories-container__button-text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.25;
}
</style>
