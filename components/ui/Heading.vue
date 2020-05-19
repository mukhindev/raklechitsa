<template>
  <div class="section-heading">
    <h2
      class="section-heading__title"
      :class="mod('section-heading__title_theme_')"
    >
      <slot name="title" />
    </h2>
    <p
      v-if="hasSubtitle"
      class="section-heading__subtitle"
      :class="mod('section-heading__subtitle_theme_')"
    >
      <slot name="subtitle" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    theme: String,
  },
  computed: {
    hasSubtitle() {
      return Boolean(this.$slots.subtitle);
    },
    mod() {
      return function(m) {
        return [this.theme ? `${m}${this.theme}` : ''];
      };
    },
  },
};
</script>

<style scoped>
.section-heading__title {
  max-width: 413px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
  transition: all 0.25s ease;
}

.section-heading__title_theme_dark {
  color: #fff;
}

@media screen and (max-width: 1280px) {
  .section-heading__title {
    max-width: 367px;
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .section-heading__title {
    max-width: 288px;
    font-size: 24px;
  }
}

.section-heading__subtitle {
  max-width: 340px;
  margin: 32px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.22;
  color: #666666;
  transition: all 0.25s ease;
}

.section-heading__subtitle_theme_dark {
  color: #dedede;
}

@media screen and (max-width: 1280px) {
  .section-heading__subtitle {
    max-width: 305px;
    margin: 30px 0 0;
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .section-heading__subtitle {
    max-width: 260px;
    margin: 20px 0 0;
    font-size: 13px;
  }
}

@media screen and (max-width: 1280px) {
  .section-heading__title {
    max-width: 367px;
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .section-heading__title {
    max-width: 288px;
    font-size: 24px;
  }
}

@media screen and (max-width: 768px) {
  .section-heading__title {
    max-width: 380px;
    text-align: center;
    margin: auto;
  }
  .section-heading__subtitle {
    max-width: 380px;
    margin: 26px auto 0;
  }
}

@media screen and (max-width: 425px) {
  .section-heading__title {
    max-width: none;
    margin: 0;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .section-heading__subtitle {
    max-width: none;
    margin-top: 16px;
  }
}
</style>
