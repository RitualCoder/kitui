<template>
  <div class="middle-content">
    <div style="display: flex; flex-direction: column; gap: 16px">
      <p style="font-size: 42px" class="font-medium">
        Build your own <span style="color: #5438a4">UI</span> kit
      </p>
      <div style="display: flex; align-items: center; justify-content: center">
        <p style="font-size: 24px; margin-right: 8px" class="font-regular">
          Make your website look 10x
        </p>
        <wordSlider :words="wordList" :interval="3000" />
      </div>
    </div>
    <div style="display: flex; gap: 30px; justify-content: center; margin-top: 35px">
      <button class="primary-button">Get Started</button>
      <button
        class="secondary-button"
        onclick="window.open('https://github.com/RitualCoder/kitui', '_blank')"
      >
        <i class="fa-brands fa-github"></i>
        Github
      </button>
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
    <ExpressIcon size="24" :color="isDark ? 'white' : 'black'" />
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
</template>

<script>
import ExpressIcon from '@/assets/icons/Express-Icon.vue'
import vueIcon from '@/assets/icons/vue-icon.svg'
import viteIcon from '@/assets/icons/vite-icon.svg'

import wordSlider from '@/components/wordSlider.vue'

import { useDark } from '@vueuse/core'
const isDark = useDark()

export default {
  name: 'HomePage',
  components: {
    wordSlider,
    ExpressIcon
  },
  data() {
    return {
      vueIcon,
      viteIcon,
      wordList: ['better', 'pretty', 'unique'],
      isDark
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
  /* background-color: #141115; */
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

[theme='dark'] .grid1 {
  transform: perspective(500px) rotate3d(1, 0, 0, 40deg) rotate3d(0, 1, 0, 30deg)
    rotate3d(0, 0, 1, 18deg);
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid1 2s linear infinite;
}

[theme='light'] .grid1 {
  transform: perspective(500px) rotate3d(1, 0, 0, 40deg) rotate3d(0, 1, 0, 30deg)
    rotate3d(0, 0, 1, 18deg);
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 2px),
    linear-gradient(180deg, rgba(0, 0, 0, 1) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid1 2s linear infinite;
}

[theme='dark'] .bglinear1 {
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

[theme='light'] .bglinear1 {
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

[theme='dark'] .grid2 {
  transform: perspective(800px) rotate3d(1, 0, 0, -40deg) rotate3d(0, 1, 0, -30deg)
    rotate3d(0, 0, 1, 18deg);

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid2 2s linear infinite;
}

[theme='light'] .grid2 {
  transform: perspective(800px) rotate3d(1, 0, 0, -40deg) rotate3d(0, 1, 0, -30deg)
    rotate3d(0, 0, 1, 18deg);

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(1, 1, 1, 1) 1px, transparent 2px),
    linear-gradient(180deg, rgba(0, 0, 0, 1) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid2 2s linear infinite;
}

[theme='dark'] .bglinear2 {
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

[theme='light'] .bglinear2 {
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

.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 2rem 4rem;
  height: 200px;
  width: 300px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}
</style>
