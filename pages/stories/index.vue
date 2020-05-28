<template>
  <section class="stories-pagination">
    <ui-container class="stories-pagination__container">
      <ui-heading>
        <template #title>Истории неизлечимых привычек</template>
      </ui-heading>
      <div class="stories-pagination__search">
        <input
          v-model="search"
          @keyup.enter="filter = search"
          type="search"
          class="stories-pagination__search-input"
          size="1"
        />
        <button-search
          @click="filter = search"
          class="stories-pagination__search-button"
          >Поиск</button-search
        >
      </div>
      <block-stories-grid :start="start" :limit="limit" :filter="filter" />
      <ui-pagination
        v-if="!filter"
        class="stories-pagination__pagination"
        @pagination="pagination"
        :initStart="start"
        :initLimit="limit"
        :numberOfStories="numberOfStories"
      />
      <!--TODO: выводить с учётом поиска -->
      <!--TODO: сохранять start в сторе -->
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import Heading from '~/components/ui/Heading';
import Button from '~/components/ui/Button';
import Pagination from '~/components/ui/Pagination';
import StoriesGrid from '~/components/blocks/StoriesGrid';

export default {
  head: {
    title: 'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',
    meta: [
      {
        name: 'description',
        content:
          'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
      },
      { name: 'keywords', content: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится' },
    ],
  },
  components: {
    'ui-container': Container,
    'ui-heading': Heading,
    'ui-pagination': Pagination,
    'button-search': Button,
    'block-stories-grid': StoriesGrid,
  },
  data() {
    return {
      search: '',
      filter: '',
      start: 0,
      limit: 16,
    };
  },
  computed: {
    numberOfStories() {
      return this.$store.getters['stories/getNumberOfStories'];
    },
  },
  methods: {
    pagination({ start, limit }) {
      this.start = start;
      this.limit = limit;
    },
  },
};
</script>

<style scoped>
.stories-pagination__container {
  padding-top: 100px;
  padding-bottom: 100px;
}

.stories-pagination__search {
  padding: 60px 0 70px;
  display: flex;
  justify-content: space-between;
}

.stories-pagination__search-input {
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  min-height: 52px;
  padding: 0 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  flex-basis: 1074px;
}

.stories-pagination__search-button {
  width: 226px;
  min-height: 48px;
  margin-left: 20px;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 640px) {
  .stories-pagination__search-button {
    width: 48px;
    color: transparent;
    background-image: url('~assets/images/magnifier.svg');
  }
}

.stories-pagination__pagination {
  margin: 140px 0 0;
}

@media screen and (max-width: 720px) {
  .stories-pagination__pagination {
    margin: 90px 0 0;
  }
}

@media screen and (max-width: 425px) {
  .stories-pagination__pagination {
    margin: 50px 0 0;
  }
}
</style>
