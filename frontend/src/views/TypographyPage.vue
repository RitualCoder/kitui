<template>
  <!-- Version mobile -->
  <div v-if="isMobile">
    <h1>Version Mobile</h1>
  </div>

  <div v-else>
    <!-- header -->
    <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 50px">
      <h1>
        Let's customize your
        <span :style="{ color: primaryColor, fontFamily: 'Alex Brush, cursive', fontSize: '54px' }"
          >T</span
        >
        <span :style="{ color: primaryColor }">ypography</span>
      </h1>
    </div>

    <!-- content -->
    <div style="display: flex; flex-direction: column; gap: 50px; margin-bottom: 30px">
      <div
        style="
          background-color: #2f2b33;
          padding: 30px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: center;
          align-items: center;
        "
      >
        <h2 style="text-align: center; font-family: 'Euclid-regular'">Font family</h2>
        <v-select
          style="width: 400px"
          label="Select typography"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="outlined"
        ></v-select>
        <h1>The quick brown fox jumps over the lazy dog.</h1>
      </div>
      <div
        style="
          background-color: #2f2b33;
          padding: 30px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: center;
          align-items: center;
        "
      >
        <h2 style="text-align: center; font-family: 'Euclid-regular'">Headings</h2>
        <v-row style="width: 100%">
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 50%">
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 50%">
                <p style="text-align: center">h1</p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 50%">
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 50%">
                <p style="text-align: center">h2</p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 50%">
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 50%">
                <p style="text-align: center">h3</p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 50%">
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 50%">
                <p style="text-align: center">h4</p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 50%">
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 50%">
                <p style="text-align: center">h5</p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="display: flex; width: 100%">
              <div style="display: flex; flex-direction: column; width: 50%">
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
                <div>
                  <slider-button
                    hide-details
                    style="width: 100%"
                    :color="primaryColor"
                  ></slider-button>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; width: 50%">
                <p style="text-align: center">h6</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- footer -->
    <div style="width: 100%; display: flex; justify-content: space-between; padding: 0px 30px">
      <app-button variant="text" size="x-large">
        <i class="fa-solid fa-arrow-left"></i>
        <span style="margin-left: 8px">Accent color</span>
      </app-button>
      <app-button variant="text" size="x-large">
        <span style="margin-right: 8px">Layout</span>
        <i class="fa-solid fa-arrow-right"></i>
      </app-button>
    </div>
  </div>
</template>

<script>
import { useColorStore } from '@/stores/colorStore'
import AppButton from '@/components/buttons/AppButton.vue'
import sliderButton from '@/components/buttons/sliderButton.vue'

export default {
  name: 'TypographyPage',
  components: {
    AppButton,
    sliderButton
  },
  data() {
    return {
      isMobile: false
    }
  },
  beforeUnmount() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 900
    }
  },
  setup() {
    const colorStore = useColorStore()
    const primaryColor = colorStore.primaryColor
    const setPrimaryColor = colorStore.setPrimaryColor

    return {
      primaryColor,
      setPrimaryColor
    }
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.middle-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  font-size: 48px;
  line-height: 1;
  text-align: center;
}

.icons > img {
  cursor: pointer;
  transition: transform 0.2s;
}

.icons > img:hover {
  transform: scale(1.1);
}

.logo {
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 100;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.grid-container1 {
  position: absolute;
  width: 100%;
  height: 75%;
  bottom: -25%;
  left: -25%;
}

.grid1 {
  transform: perspective(500px) rotate3d(1, 0, 0, 40deg) rotate3d(0, 1, 0, 30deg)
    rotate3d(0, 0, 1, 18deg);
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid1 2s linear infinite;
}

.v-theme--light .grid1 {
  transform: perspective(500px) rotate3d(1, 0, 0, 40deg) rotate3d(0, 1, 0, 30deg)
    rotate3d(0, 0, 1, 18deg);
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 2px),
    linear-gradient(180deg, rgba(0, 0, 0, 1) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid1 2s linear infinite;
}

.bglinear1 {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(20, 17, 21, 1) 0%,
    rgba(20, 17, 21, 0.7) 50%,
    rgba(20, 17, 21, 0) 100%
  );
}

.v-theme--light .bglinear1 {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(242, 245, 249, 1) 0%,
    rgba(242, 245, 249, 0.7) 50%,
    rgba(242, 245, 249, 0) 100%
  );
}

@keyframes animateGrid1 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0px 50px;
  }
}

.grid-container2 {
  position: absolute;
  width: 100%;
  height: 75%;
  top: -25%;
  right: -25%;
}

.grid2 {
  transform: perspective(800px) rotate3d(1, 0, 0, -40deg) rotate3d(0, 1, 0, -30deg)
    rotate3d(0, 0, 1, 18deg);

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid2 2s linear infinite;
}

.v-theme--light .grid2 {
  transform: perspective(800px) rotate3d(1, 0, 0, -40deg) rotate3d(0, 1, 0, -30deg)
    rotate3d(0, 0, 1, 18deg);

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(1, 1, 1, 1) 1px, transparent 2px),
    linear-gradient(180deg, rgba(0, 0, 0, 1) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid2 2s linear infinite;
}

.bglinear2 {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(20, 17, 21, 0) 0%,
    rgba(20, 17, 21, 0.7) 50%,
    rgba(20, 17, 21, 1) 100%
  );
}

.v-theme--light .bglinear2 {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(242, 245, 249, 0) 0%,
    rgba(242, 245, 249, 0.7) 50%,
    rgba(242, 245, 249, 1) 100%
  );
}

@keyframes animateGrid2 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0px -50px;
  }
}
</style>
