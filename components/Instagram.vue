<template>
  <div>
    <section class="instagram">
      <block-container class="instagram__container">
        <block-line newline>
          <template #text>Рассказывайте ваши истории в Инстаграм </template>
          <template #tag>#этонелечится</template>
        </block-line>
        <block-two-columns class="instagram__two-columns">
          <template #heading>
            <section-heading>
              <template #title
                ><a
                  href="https://www.instagram.com/raklechitsa/"
                  target="_blank"
                  class="instagram__title"
                  >Инстаграм</a
                ></template
              >
              <template #subtitle>
                Два раза в неделю мы просматриваем все посты по хештегу
                #этонелечится. Все истории, где нет нецензурных выражений и
                запрещенного контента попадают сюда. Следите за правильным
                написанием хештега, чтобы мы не пропустили вашу историю.
              </template>
            </section-heading>
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
        </block-two-columns>
      </block-container>
    </section>
  </div>
</template>

<script>
import BlockContainer from '~/components/Container.vue';
import BlockTwoColumns from '~/components/TwoColumns.vue';
import SectionHeading from '~/components/SectionHeading';
import BlockLine from '~/components/Line';

export default {
  components: {
    BlockContainer,
    BlockTwoColumns,
    SectionHeading,
    BlockLine,
  },
  computed: {
    instagram() {
      return this.$store.getters['api/getInstagram'];
    },
  },
};
</script>

<style scoped>
.instagram__container {
  padding-top: 100px;
  padding-bottom: 100px;
}

.instagram__two-columns {
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

.instagram__card-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
