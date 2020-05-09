<template>
  <section class="intro page__intro">
    <div class="intro__container">
      <article class="intro__description">
        <div class="intro__wrapper">
          <section-heading>
            <template #title
              >Истории людей, победивших рак, но не свои привычки</template
            >
            <template #subtitle>
              Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
              фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
              доказательство — люди с их историями.
            </template>
          </section-heading>
        </div>
        <div class="intro__wrapper-btn">
          <button
            type="button"
            class="intro__btn intro__btn_left"
            v-on:click="moveVideoBack"
            :disabled="changeDisabledForLeft"
          >
            <svg
              class="intro__arrow"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 1L1 9L9 17" stroke="#BFBFBF" />
            </svg>
          </button>
          <button
            type="button"
            class="intro__btn intro__btn_right"
            v-on:click="moveVideoAhead"
            :disabled="changeDisabledForRight"
          >
            <svg
              class="intro__arrow"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 17L9 9L1 1" stroke="#BFBFBF" />
            </svg>
          </button>
        </div>
      </article>
      <div class="intro__video">
        <iframe
          class="intro__iframe"
          :src="urlList[counter]"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
    </div>
    <div class="intro__lane"></div>
  </section>
</template>

<script>
import SectionHeading from '~/components/SectionHeading';

export default {
  components: {
    SectionHeading,
  },
  data() {
    return {
      urlList: [
        'https://www.youtube.com/embed/ou60K0WfcJ0',
        'https://www.youtube.com/embed/8IPCPfRF8F0',
        'https://www.youtube.com/embed/iIfbrdnvQfI',
        'https://www.youtube.com/embed/ebyAaIUyFlU',
        'https://www.youtube.com/embed/YfPl4RaGoEg',
        'https://www.youtube.com/embed/_T1mhQlH-ZE',
        'https://www.youtube.com/embed/5xIwKLZ8QZw',
        'https://www.youtube.com/embed/LiXU56qgYDs',
      ],
      counter: 0,
    };
  },
  computed: {
    changeDisabledForRight() {
      if (this.counter + 1 === this.urlList.length) {
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
  },
};
</script>

<style scoped>
.intro {
  max-width: 1320px;
}

.page__intro {
  padding: 90px 60px 0;
  margin: auto;
}

.intro__container {
  display: grid;
  grid-template-columns: 1fr 2.1fr;
  grid-gap: 40px;
}

.intro__description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.intro__title {
  max-width: 413px;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  color: #000;
}

.intro__text {
  max-width: 340px;
  padding-top: 32px;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  color: #666;
}

.intro__iframe {
  border: 0;
  width: 100%;
  min-height: 450px;
}

.intro__video-text {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.3;
  color: #666;
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
  margin-bottom: 18px;
}

.intro__btn {
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  border: 0;
  outline: none;
  transition: all 0.3s ease;
}

.intro__arrow path {
  transition: all 0.3s ease;
}

.intro__btn:hover {
  background-color: #613a93;
}

.intro__btn:hover .intro__arrow path {
  stroke: white;
}

.intro__lane {
  margin-top: 74px;
  background-color: #613a93;
  min-height: 86px;
  background-image: url("data:image/svg+xml,%3Csvg width='716' height='36' viewBox='0 0 716 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.563921 8.18182V30H3.12074L15.0099 12.8693H15.223V30H17.8651V8.18182H15.3082L3.37642 25.3551H3.16335V8.18182H0.563921ZM31.5893 30H39.4728C44.6291 30 46.7598 27.4858 46.7598 24.2045C46.7598 20.7528 44.3734 18.8778 42.3706 18.75V18.5369C44.2456 18.0256 45.9075 16.7898 45.9075 13.9773C45.9075 10.7812 43.7768 8.18182 39.2172 8.18182H31.5893V30ZM34.2314 27.6562V20.071H39.6007C42.4558 20.071 44.2456 21.9886 44.2456 24.2045C44.2456 26.1222 42.9245 27.6562 39.4728 27.6562H34.2314ZM34.2314 17.7699V10.5256H39.2172C42.1149 10.5256 43.3933 12.0597 43.3933 13.9773C43.3933 16.2784 41.5183 17.7699 39.1319 17.7699H34.2314ZM77.9476 19.0909C77.9476 12.1875 73.8993 7.88352 68.3169 7.88352C62.7346 7.88352 58.6863 12.1875 58.6863 19.0909C58.6863 25.9943 62.7346 30.2983 68.3169 30.2983C73.8993 30.2983 77.9476 25.9943 77.9476 19.0909ZM75.3908 19.0909C75.3908 24.7585 72.28 27.8267 68.3169 27.8267C64.3539 27.8267 61.2431 24.7585 61.2431 19.0909C61.2431 13.4233 64.3539 10.3551 68.3169 10.3551C72.28 10.3551 75.3908 13.4233 75.3908 19.0909ZM80.2887 10.5256H87.1495V30H89.7915V10.5256H96.6523V8.18182H80.2887V10.5256ZM98.8549 30H99.6646C104.48 30 105.449 26.0795 105.716 19.2188L106.057 10.5256H114.196V30H116.838V8.18182H103.542L103.159 18.7074C102.925 25.142 102.221 27.571 99.4941 27.571H98.8549V30ZM122.117 8.18182V30H124.673L136.563 12.8693H136.776V30H139.418V8.18182H136.861L124.929 25.3551H124.716V8.18182H122.117ZM144.918 8.18182V15.4688C144.918 20.2841 147.645 22.0739 152.162 22.0739C154.804 22.0739 156.434 21.733 158.213 21.2003V30H160.855V8.18182H158.213V18.8033C156.349 19.3466 154.367 19.6875 152.162 19.6875C149.349 19.6875 147.56 18.7074 147.56 15.4688V8.18182H144.918ZM166.15 8.18182V30H168.707L180.596 12.8693H180.809V30H183.451V8.18182H180.894L168.962 25.3551H168.749V8.18182H166.15ZM188.738 30H202.076V27.6562H191.38V20.2415H201.224V17.8977H191.38V10.5256H201.905V8.18182H188.738V30ZM233.514 19.0909C233.514 12.1875 229.466 7.88352 223.883 7.88352C218.301 7.88352 214.253 12.1875 214.253 19.0909C214.253 25.9943 218.301 30.2983 223.883 30.2983C229.466 30.2983 233.514 25.9943 233.514 19.0909ZM230.957 19.0909C230.957 24.7585 227.846 27.8267 223.883 27.8267C219.92 27.8267 216.809 24.7585 216.809 19.0909C216.809 13.4233 219.92 10.3551 223.883 10.3551C227.846 10.3551 230.957 13.4233 230.957 19.0909ZM235.855 10.5256H242.716V30H245.358V10.5256H252.219V8.18182H235.855V10.5256ZM264.734 30H267.376V22.0312H272.149C277.23 22.0312 279.521 18.9418 279.521 15.0852C279.521 11.2287 277.23 8.18182 272.106 8.18182H264.734V30ZM267.376 19.6875V10.5256H272.021C275.568 10.5256 276.921 12.4645 276.921 15.0852C276.921 17.706 275.568 19.6875 272.063 19.6875H267.376ZM282.445 30L284.64 23.821H293.461L295.655 30H298.425L290.414 8.18182H287.687L279.675 30H282.445ZM285.471 21.4773L288.965 11.6335H289.135L292.63 21.4773H285.471ZM314.65 30H317.804L308.684 17.7699L317.506 8.18182H314.352L305.616 17.642H304.466V8.18182H301.824V30H304.466V19.9858H307.15L314.65 30ZM322.113 30L324.308 23.821H333.129L335.323 30H338.093L330.082 8.18182H327.355L319.343 30H322.113ZM325.139 21.4773L328.633 11.6335H328.803L332.298 21.4773H325.139ZM344.901 27.017H342.173L342.046 28.2102C341.737 31.0973 341.129 33.9737 340.852 35.3267H342.77C343.281 33.8778 344.368 30.5966 344.73 28.1676L344.901 27.017ZM368.977 30H374.09L375.227 23.0682H379.076L379.942 17.9545H376.065L376.888 12.9545H380.738L381.604 7.84091H377.727L378.863 0.90909H373.749L372.613 7.84091H367.499L368.636 0.90909H363.522L362.386 7.84091H358.536L357.67 12.9545H361.548L360.724 17.9545H356.874L356.008 23.0682H359.886L358.749 30H363.863L364.999 23.0682H370.113L368.977 30ZM365.837 17.9545L366.661 12.9545H371.775L370.951 17.9545H365.837ZM383.838 20.3125C384.179 26.392 388.753 30.3977 396.011 30.3977C403.81 30.3977 408.426 25.1278 408.426 16.5199V14.4886C408.426 5.88068 403.582 0.511363 396.082 0.511363C388.256 0.511363 384.349 5.08523 383.795 10.8807H390.741C390.898 7.89773 392.02 6.10795 396.082 6.10795C399.605 6.10795 401.253 8.35227 401.523 12.983H393.085V18.5227H401.494C401.196 22.7841 399.761 24.9148 396.011 24.9148C392.688 24.9148 390.855 23.4091 390.798 20.3125H383.838ZM410.227 6.61932H419.062V30H425.994V6.61932H434.815V0.90909H410.227V6.61932ZM464.378 15.4545C464.378 5.83807 458.298 0.511363 450.486 0.511363C442.645 0.511363 436.608 5.83807 436.608 15.4545C436.608 25.0284 442.645 30.3977 450.486 30.3977C458.298 30.3977 464.378 25.071 464.378 15.4545ZM457.19 15.4545C457.19 21.1506 454.69 24.233 450.486 24.233C446.295 24.233 443.781 21.1506 443.781 15.4545C443.781 9.75852 446.295 6.67614 450.486 6.67614C454.69 6.67614 457.19 9.75852 457.19 15.4545ZM468.483 30H475.514V18.3097H486.977V30H493.994V0.90909H486.977V12.5852H475.514V0.90909H468.483V30ZM498.405 30H518.689V24.2898H505.436V18.3097H517.652V12.5852H505.436V6.61932H518.689V0.90909H498.405V30ZM521.828 30H523.589C530.777 30 533.263 26.0511 533.746 16.0795L534.2 6.44886H541.317V30H548.121V0.90909H527.709L527.24 13.4943C526.956 21.4347 525.678 24.0341 522.624 24.4034L521.828 24.4886V30ZM552.506 30H572.79V24.2898H559.538V18.3097H571.754V12.5852H559.538V6.61932H572.79V0.90909H552.506V30ZM578.657 0.90909V10.1705C578.657 16.8608 583.472 19.929 590.816 19.929C591.697 19.929 594.154 19.7869 595.844 19.5312V30H602.691V0.90909H595.844V14.1051C594.225 14.3182 591.867 14.4318 590.816 14.4318C586.924 14.4318 585.461 13.2102 585.461 10.1705V0.90909H578.657ZM608.444 0.90909V30H614.41L625.987 13.2102H626.171V30H633.202V0.90909H627.151L615.702 17.6705H615.461V0.90909H608.444ZM636.672 6.61932H645.507V30H652.439V6.61932H661.26V0.90909H636.672V6.61932ZM689.772 11.4489C689.062 4.48864 683.877 0.511363 676.846 0.511363C669.09 0.511363 663.053 5.83807 663.053 15.4545C663.053 25.0284 668.948 30.3977 676.846 30.3977C684.829 30.3977 689.246 24.9716 689.772 19.8153L682.67 19.7727C682.173 22.571 680.07 24.233 676.988 24.233C672.84 24.233 670.227 21.2358 670.227 15.4545C670.227 9.90057 672.783 6.67614 677.031 6.67614C680.227 6.67614 682.315 8.53693 682.67 11.4489H689.772ZM715.869 30V0.90909H703.852C697.318 0.90909 693.241 4.61648 693.241 10.5966C693.241 14.6165 695.088 17.4716 698.284 18.9205L692.247 30H699.918L705.23 20.0426H708.838V30H715.869ZM708.838 14.5028H705.372C702.219 14.5028 700.528 13.2955 700.528 10.5966C700.528 7.89773 702.219 6.5767 705.372 6.5767H708.838V14.5028Z' fill='white'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
}

.intro__btn:disabled {
  background-color: #fbfbfb;
}

.intro__btn:disabled .intro__arrow path {
  stroke: #bfbfbf;
}

@media screen and (max-width: 1280px) {
  .intro__lane {
    margin-top: 64px;
  }
}

@media screen and (max-width: 1280px) {
  .intro__iframe {
    min-height: 400px;
  }
}
</style>
