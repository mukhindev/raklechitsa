<template>
  <div>
    <section class="stories-pagination page__stories-pagination">
      <section-heading>
        <template #title>Истории неизлечимых привычек</template>
      </section-heading>
      <div class="stories-pagination__search">
        <input type="search" class="stories-pagination__input" />
        <button-search class="stories-pagination__input-btn"
          >Поиск</button-search
        >
      </div>
      <stories-grid :start="start" :limit="limit" />
      <div class="stories-pagination__buttons">
        <button
          ref="buttons"
          type="button"
          class="stories-pagination__button"
          v-for="(item, index) in numberOfButtons"
          :key="index"
          :value="index + 1"
          @click="setPage($event)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeading from '~/components/SectionHeading';
import Button from '~/components/ui/Button';
import StoriesGrid from '~/components/StoriesGrid';
export default {
  components: {
    SectionHeading,
    'button-search': Button,
    StoriesGrid,
  },
  data() {
    return {
      start: 0,
      limit: 16,
      numberOfPage: 1,
      partsOfPages: [],
    };
  },
  computed: {
    numberOfButtons() {
      let num = Math.ceil(this.$store.getters['api/getNumberOfStories'] / 16);
      let counter = 0;
      for (let i = 1; i <= num; i++) {
        this.partsOfPages.push({ start: counter, limit: counter + 16 });
        counter += 16;
      }
      return num;
    },
    showPerPageStart() {
      return (this.start = this.partsOfPages[this.numberOfPage - 1].start);
    },
    showPerPageLimit() {
      return (this.limit = this.partsOfPages[this.numberOfPage - 1].limit);
    },
  },
  methods: {
    setPage(event) {
      for (let i = 0; i < this.$refs.buttons.length; i++) {
        if (+event.target.value - 1 === i) {
          this.numberOfPage = +event.target.value;
          event.target.style.backgroundColor = '#F4F4F4';
        } else {
          this.$refs.buttons[i].style.backgroundColor = '#FBFBFB';
        }
      }
      this.showPerPageStart;
      this.showPerPageLimit;
    },
  },
};
</script>

<style scoped>
.stories-pagination {
  max-width: 1320px;
}

.page__stories-pagination {
  padding: 100px 60px;
  margin: 0 auto;
}

.stories-pagination__search {
  padding: 60px 0 70px;
  display: flex;
  justify-content: space-between;
}

.stories-pagination__input {
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

.stories-pagination__input-btn /deep/ .button {
  width: 226px;
  margin-left: 20px;
}

.stories-pagination__buttons {
  max-width: 1320px;
  padding-top: 140px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 58px);
  column-gap: 10px;
  row-gap: 20px;
  justify-content: center;
}

.stories-pagination__button {
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  outline: none;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  color: #181818;
  padding: 0;
  transition: all 0.2s;
}

.stories-pagination__button:hover {
  background: #f4f4f4;
}

.stories-pagination__button:nth-of-type(1) {
  background: #f4f4f4;
}

@media screen and (max-width: 1280px) {
  .page__stories-pagination {
    padding: 90px 50px;
    margin: 0 auto;
  }
  .stories-pagination__search {
    padding: 50px 0 60px;
  }
  .stories-pagination__input {
    min-height: 48px;
  }
  .stories-pagination__input-btn /deep/ .button {
    min-height: 48px;
  }
  .stories-pagination__buttons {
    padding-top: 130px;
  }
  .stories-pagination__button {
    width: 56px;
    height: 56px;
  }
  .stories-pagination__buttons {
    grid-template-columns: repeat(auto-fit, 56px);
  }
}
</style>
