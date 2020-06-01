<template>
  <div class="pagination">
    <div class="pagination__grid">
      <ui-button
        class="pagination__button pagination__button_first"
        @click="toFirstPage"
        :disabled="!disabledPrev"
        >Первая
      </ui-button>
      <div class="pagination__nav">
        <ui-button
          class="pagination__button pagination__button_prev"
          @click="toPrevPage"
          :disabled="!disabledPrev"
        >
        </ui-button>
        <ui-button
          class="pagination__button"
          :class="{ pagination__button_active: numberPage === page.id }"
          v-for="page in slicePaginationMap"
          :key="page.id"
          @click="toPage(page.start)"
          >{{ page.id + 1 }}
        </ui-button>
        <ui-button
          class="pagination__button pagination__button_next"
          @click="toNextPage"
          :disabled="!disabledNext"
        >
        </ui-button>
      </div>
      <ui-button
        class="pagination__button pagination__button_last"
        @click="toLastPage"
        :disabled="!disabledNext"
        >Последняя
      </ui-button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/ui/Button';

export default {
  components: {
    'ui-button': Button,
  },
  props: {
    initStart: Number,
    initLimit: Number,
    numberOfStories: Number,
  },
  data() {
    return {
      start: 0,
      limit: 0,
    };
  },
  computed: {
    numberOfPages() {
      if (this.limit > 0) return Math.floor(this.numberOfStories / this.limit);
    },
    paginationMap() {
      const arr = [];
      let start = 0;
      for (let i = 0; i < this.numberOfPages; i++) {
        arr.push({
          id: i,
          start,
        });
        start += this.limit;
      }
      return arr;
    },
    numberPage() {
      if (this.paginationMap.length)
        return this.paginationMap.find(el => el.start === this.start).id;
    },
    slicePaginationMap() {
      if (this.numberPage <= 1) return this.paginationMap.slice(0, 3);
      if (this.numberOfPages - this.numberPage <= 1)
        return this.paginationMap.slice(-3);
      return this.paginationMap.slice(this.numberPage - 1, this.numberPage + 2);
    },
    disabledPrev() {
      if (this.numberPage > 0) return true;
      return false;
    },
    disabledNext() {
      if (this.numberPage < this.numberOfPages - 1) return true;
      return false;
    },
  },
  methods: {
    pagination() {
      this.$emit('pagination', {
        start: this.start,
        limit: this.limit,
      });
    },
    toPage(start) {
      this.start = start;
      this.pagination();
    },
    toFirstPage() {
      this.start = 0;
      this.pagination();
    },
    toLastPage() {
      this.start = this.paginationMap[this.paginationMap.length - 1].start;
      this.pagination();
    },
    toPrevPage() {
      if (this.disabledPrev) {
        this.start = this.paginationMap[this.numberPage - 1].start;
        this.pagination();
      }
    },
    toNextPage() {
      if (this.disabledNext) {
        this.start = this.paginationMap[this.numberPage + 1].start;
        this.pagination();
      }
    },
  },
  mounted() {
    this.start = this.initStart;
    this.limit = this.initLimit;
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination__grid {
  justify-self: center;
  display: grid;
  grid-template-columns: min-content min-content min-content;
  gap: 10px;
}

@media screen and (max-width: 720px) {
  .pagination__grid {
    grid-template-columns: min-content min-content;
  }
}

.pagination__nav {
  display: flex;
  justify-content: center;
  align-content: center;
}

.pagination__button {
  color: #000;
  background-color: #fbfbfb;
  min-width: 58px;
  min-height: 58px;
  margin-right: 10px;
  background-size: 30% 30%;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 1280px) {
  .pagination__button {
    min-width: 56px;
    min-height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination__button {
    min-width: 50px;
    min-height: 50px;
    font-size: 15px;
  }
}

@media screen and (max-width: 768px) {
  .pagination__button {
    min-width: 50px;
    min-height: 50px;
    font-size: 15px;
  }
}

.pagination__button:hover {
  background-color: #f4f4f4;
}

.pagination__button:disabled {
  color: #a2a2a2;
  cursor: not-allowed;
}

.pagination__button:disabled:hover {
  background-color: #fbfbfb;
}

.pagination__button_active {
  background-color: #f4f4f4;
}

.pagination__button_prev {
  background-image: url('~assets/images/arrow_left.svg');
}

.pagination__button_next {
  margin: 0;
  background-image: url('~assets/images/arrow_right.svg');
}

.pagination__button_first,
.pagination__button_last {
  background-color: transparent;
  padding: 10px;
  margin: 0;
}

@media screen and (max-width: 720px) {
  .pagination__nav {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
  .pagination__button_first {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    text-align: left;
    margin-top: 16px;
  }
  .pagination__button_last {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    text-align: right;
    margin-top: 16px;
  }
}

.pagination__button_first:disabled:hover,
.pagination__button_last:disabled:hover {
  background-color: transparent;
}
</style>
