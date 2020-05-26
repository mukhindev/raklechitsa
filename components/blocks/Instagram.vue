<template>
  <div>
    <section class="instagram">
      <ui-container class="instagram__container">
        <ui-strip tagblock>
          <template #text>{{ strip.title }} </template>
          <template #tag>{{ strip.hashtag }}</template>
        </ui-strip>
        <ui-two-columns class="instagram__ui-two-columns">
          <template #heading>
            <ui-heading>
              <template #title
                ><a
                  href="https://www.instagram.com/raklechitsa/"
                  target="_blank"
                  class="instagram__title"
                  >{{ block.title }}</a
                ></template
              >
              <template #subtitle>
                {{ block.text }}
              </template>
            </ui-heading>
          </template>
          <template #content>
            <ul class="instagram__cards">
              <li
                class="instagram__card hover-card"
                v-for="item in instagram"
                :key="item.id"
              >
                <a class="instagram__card-link" :href="item.url" target="_blank"
                  ><img
                    class="instagram__card-image"
                    :src="item.img"
                    alt="Фото с инстаграм"
                /></a>
              </li>
            </ul>
          </template>
        </ui-two-columns>
      </ui-container>
    </section>
  </div>
</template>

<script>
import Container from '~/components/ui/Container';
import TwoColumns from '~/components/ui/TwoColumns';
import Heading from '~/components/ui/Heading';
import Card from '~/components/ui/Card';
import Strip from '~/components/ui/Strip';

export default {
  components: {
    'ui-container': Container,
    'ui-two-columns': TwoColumns,
    'ui-heading': Heading,
    'ui-card': Card,
    'ui-strip': Strip,
  },
  computed: {
    instagram() {
      return this.$store.state.instagram.instagram;
    },
    block() {
      return this.$store.state.blocks.blocks.find(
        el => el.block === 'instagram'
      );
    },
    strip() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'note-2');
    },
  },
};
</script>

<style scoped>
.instagram__container {
  padding-top: 100px;
  padding-bottom: 100px;
}

.instagram__ui-two-columns {
  margin-top: 100px;
}

.instagram__title {
  text-decoration: none;
  color: #000;
  border-bottom: 3px solid #000;
  transition: all 0.2s ease;
}

.instagram__title:hover {
  opacity: 0.7;
}

.instagram__cards {
  margin: 0;
  padding: 0;
  list-style: none;
}

.instagram__cards {
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  grid-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .instagram__cards {
    grid-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__cards {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .instagram__cards {
    grid-template-columns: repeat(3, 4fr);
    grid-gap: 20px;
  }
}

@media screen and (max-width: 425px) {
  .instagram__cards {
    grid-template-columns: repeat(2, 4fr);
    grid-gap: 10px;
  }
}

.instagram__card-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
