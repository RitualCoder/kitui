<template>
  <!-- Version mobile -->
  <div v-if="isMobile">
    <h1>Version Mobile</h1>
  </div>

  <div v-else>
    <div class="middle-content">
      <div style="display: flex; flex-direction: column; gap: 16px">
        <p style="font-size: 42px" class="font-medium">
          Build your own <span :style="{ color: primaryColor }">UI</span> kit
        </p>

        <div style="display: flex; align-items: center; justify-content: center">
          <p style="font-size: 24px; margin-right: 8px" class="font-regular">
            Make your website look 10x
          </p>
          <word-slider :words="wordList" :interval="2500" />
        </div>
      </div>
      <div style="display: flex; gap: 30px; justify-content: center; margin-top: 35px">
        <app-button variant="default" size="x-large" @click="() => $router.push({ name: 'Typography' })"
          >Get Started
        </app-button>
        <app-button size="x-large" variant="outlined">
          <i class="fa-brands fa-github"></i> <span style="margin-left: 8px">Github</span>
        </app-button>
      </div>
    </div>

    <div
      style="
        display: flex;
        position: absolute;
        bottom: 20px;
        right: 20px;
        gap: 15px;
        align-items: center;
      "
      class="icons"
    >
      <img :src="vueIcon" alt="" style="width: 26px; cursor: pointer" />
      <img :src="viteIcon" alt="" style="width: 21px; cursor: pointer" />
      <ExpressIcon size="24" :color="$vuetify.theme.current.dark ? 'white' : 'black'" />
    </div>

    <div class="grid-container1">
      <div class="grid1">
        <div class="bglinear1"></div>
      </div>
    </div>
    <div class="grid-container2">
      <div class="grid2">
        <div class="bglinear2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ExpressIcon from '@/assets/icons/Express-Icon.vue'
import vueIcon from '@/assets/icons/vue-icon.svg'
import viteIcon from '@/assets/icons/vite-icon.svg'

import wordSlider from '@/components/wordSlider.vue'
import appButton from '@/components/buttons/AppButton.vue'

import { useColorStore } from '@/stores/colorStore'

export default {
  name: 'HomePage',
  components: {
    wordSlider,
    ExpressIcon,
    appButton
  },
  data() {
    return {
      isMobile: false,
      vueIcon,
      viteIcon,
      wordList: ['better', 'pretty', 'unique']
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

    return {
      primaryColor
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
