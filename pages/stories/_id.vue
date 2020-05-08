<template>
  <section class="story">
    <div class="story__lead">
      <img
        :src="story.photo"
        :alt="`фото ${story.person}`"
        class="story__photo"
      />
      <div class="story__intro">
        <h3 class="story__person">{{ story.person }}:</h3>
        <p class="story__quote">«{{ story.quote }}»</p>
      </div>
    </div>
    <div class="story__text">
      {{ story.story }}
    </div>
    <stories-grid start="0" limit="4" more />
  </section>
</template>

<script>
import SectionHeading from '~/components/SectionHeading.vue';
import StoriesGrid from '~/components/StoriesGrid.vue';

export default {
  components: {
    SectionHeading,
    StoriesGrid,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    story() {
      return this.$store.getters['stories/getStoryById'](this.id);
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
  font-size: 38px;
  line-height: 1.26;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 30px 0 0;
}
.story__person {
  display: inline;
  margin: 0;
  font-weight: 600;
}
.story__quote {
  display: inline;
  margin: 0;
  font-weight: 500;
}
.story__text {
  max-width: 780px;
  margin: 0 auto 70px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 1.36;
}
</style>
