<template>
  <section class="intro">
    <ui-container class="intro__container">
      <ui-two-columns>
        <template #heading>
          <div class="intro__column">
            <ui-heading>
              <template #title>{{ block.title }}</template>
              <template #subtitle>
                <div v-html="block.text"></div>
              </template>
            </ui-heading>
            <div v-if="width > 768" class="intro__wrapper-btn">
              <button
                type="button"
                class="intro__btn intro__btn_left"
                v-on:click="moveVideoBack"
                :disabled="changeDisabledForLeft"
              ></button>
              <button
                type="button"
                class="intro__btn intro__btn_right"
                v-on:click="moveVideoAhead"
                :disabled="changeDisabledForRight"
              ></button>
            </div>
          </div>
        </template>

        <template #content>
          <div class="intro__video">
            <div v-if="width <= 768" class="intro__wrapper-btn">
              <button
                type="button"
                class="intro__btn intro__btn_left"
                v-on:click="moveVideoBack"
                :disabled="changeDisabledForLeft"
              ></button>
              <button
                type="button"
                class="intro__btn intro__btn_right"
                v-on:click="moveVideoAhead"
                :disabled="changeDisabledForRight"
              ></button>
            </div>
            <div class="intro__ratio-box">
              <transition name="transition-slide">
                <iframe
                  class="intro__iframe"
                  :src="videos[counter].url"
                  :key="videos[counter].url"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </transition>
            </div>
            <p class="intro__video-text">
              Все видео вы можете найте на нашем
              <a
                href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
                target="_blank"
                class="intro__video-link"
                >YouTube канале</a
              >.
            </p>
          </div>
        </template>
      </ui-two-columns>

      <ui-strip class="intro__strip">
        <template #text>{{ strip.title }} </template>
        <template #tag>{{ strip.hashtag }}</template>
      </ui-strip>
    </ui-container>
  </section>
</template>

<script>
import Container from '~/components/ui/Container';
import TwoColumns from '~/components/ui/TwoColumns';
import Heading from '~/components/ui/Heading';
import Strip from '~/components/ui/Strip';

export default {
  components: {
    'ui-heading': Heading,
    'ui-container': Container,
    'ui-two-columns': TwoColumns,
    'ui-strip': Strip,
  },
  data() {
    return {
      width: null,
      counter: 0,
    };
  },
  computed: {
    videos() {
      return this.$store.state.videos.videos;
    },
    block() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'videos');
    },
    strip() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'note-1');
    },
    changeDisabledForRight() {
      if (this.counter + 1 === this.videos.length) {
        return true;
      }
    },
    changeDisabledForLeft() {
      if (this.counter === 0) {
        return true;
      }
    },
  },
  methods: {
    moveVideoAhead() {
      this.counter++;
    },
    moveVideoBack() {
      this.counter--;
    },
    resizeDetector(e) {
      this.width = e.target.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeDetector);
    this.width = window.innerWidth;
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeDetector);
  },
};
</script>

<style scoped>
.intro__container {
  padding-top: 100px;
}

.intro__column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.intro__ratio-box {
  /* Чтобы iframe с youtube удерживал пропорции 16:9 */
  padding-bottom: 56.5%;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .intro__ratio-box {
    margin: 0 54px;
  }
}

@media screen and (max-width: 425px) {
  .intro__ratio-box {
    margin: 0 0;
  }
}

.intro__iframe {
  border: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.intro__video {
  position: relative;
}

.intro__video-text {
  margin: 10px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.3;
  color: #666;
}

@media screen and (max-width: 768px) {
  .intro__video-text {
    margin: 20px 0 0 54px;
  }
}

@media screen and (max-width: 425px) {
  .intro__video-text {
    margin: 20px 0 0 0px;
  }
}

.intro__video-link {
  color: #666;
  transition: all 0.3s ease;
}

.intro__video-link:hover {
  opacity: 0.7;
}

.intro__wrapper-btn {
  font-size: 0;
  margin: 18px 0;
  z-index: 2;
}

@media screen and (max-width: 768px) {
  .intro__wrapper-btn {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    transform: translateY(calc(-50% - 40px));
  }
}

.intro__wrapper-btn-overlay {
  z-index: 2;
}

.intro__btn {
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  border: 0;
  outline: none;
  transition: all 0.25s ease;
  background-size: 40% 40%;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 425px) {
  .intro__btn {
    background-color: transparent;
    filter: invert();
  }
}

.intro__btn_left {
  background-image: url('~assets/images/arrow_left.svg');
}

.intro__btn_right {
  background-image: url('~assets/images/arrow_right.svg');
}

.intro__btn:hover {
  background-size: 55% 55%;
}

.intro__btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.intro__btn:disabled:hover {
  background-size: 40% 40%;
}

.intro__strip {
  margin-top: 74px;
}

.transition-slide-enter-active,
.transition-slide-leave-active {
  transition: all 1s;
}

.transition-slide-enter {
  transform: translateY(100%);
}

.transition-slide-leave-to {
  transform: translateY(-100%);
}
</style>
