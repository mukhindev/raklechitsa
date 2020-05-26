<template>
  <section class="cover" ref="cover">
    <ui-container class="cover__container">
      <p class="cover__tag">{{ block.hashtag }}</p>
      <button
        type="button"
        @click="coverScrollToBottom"
        class="cover__polygon"
        title="Листайте ниже"
      ></button>
    </ui-container>
  </section>
</template>
<script>
import Container from '~/components/ui/Container';

export default {
  data() {
    return {
      headerHeight: 0,
    };
  },
  components: {
    'ui-container': Container,
  },
  computed: {
    block() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'cover');
    },
  },
  methods: {
    coverScrollToBottom() {
      const intro = this.$refs.cover.nextElementSibling;
      intro.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.cover {
  background: #613a93;
}
.cover__container {
  padding: 0;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
}

.cover__tag {
  color: #fff;
  font-weight: 800;
  font-size: 92px;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

@media screen and (max-width: 1280px) {
  .cover__tag {
    font-size: 78px;
  }
}

@media screen and (max-width: 768px) {
  .cover__tag {
    font-size: 10vw;
  }
}

@media screen and (max-width: 425px) {
  .cover__tag {
    font-size: 36px;
  }
}

.cover__polygon {
  border: none;
  padding: 0;
  background-color: transparent;
  background-image: url('~assets/images/arrow-wide_down.svg');
  background-size: 38px 15px;
  background-position: center;
  background-repeat: no-repeat;
  width: 54px;
  height: 31px;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  transition: opacity 0.25s;
  cursor: pointer;
}
.cover__polygon:hover {
  opacity: 0.7;
}
</style>
