<template>
  <div class="logo">
    <img style="object-fit: cover" src="/logos/logo-dark.svg" alt="" />
  </div>
  <div class="middle-content">
    <div style="display: flex; flex-direction: column; gap: 16px">
      <p style="font-size: 42px" class="font-medium">
        Build your own <span style="color: #5438a4">UI</span> kit
      </p>
      <p style="font-size: 24px" class="font-regular">Make your website look 10x better</p>
    </div>
    <div style="display: flex; gap: 30px; justify-content: center; margin-top: 35px">
      <button class="primary-button">
        Get Started
        <i class="fa-solid fa-arrow-right"></i>
      </button>
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
    <img :src="vueIcon" alt="" style="width: 32px; cursor: pointer" />
    <img :src="viteIcon" alt="" style="width: 26px; cursor: pointer" />
    <img :src="expressIcon" alt="" style="width: 32px; cursor: pointer" />
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
import expressIcon from '@/assets/icons/express-icon.svg'
import vueIcon from '@/assets/icons/vue-icon.svg'
import viteIcon from '@/assets/icons/vite-icon.svg'

export default {
  name: 'HomePage',
  data() {
    return {
      expressIcon,
      vueIcon,
      viteIcon
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
  background-color: black;
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
  transition:
    transform 0.2s,
    background-color 0.2s;
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
  bottom: -30%;
  left: -25%;
}

.grid1 {
  transform: perspective(800px) rotate3d(1, 0, 0, 45deg) rotate3d(0, 1, 0, 30deg)
    rotate3d(0, 0, 1, 18deg);
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid1 2s linear infinite;
}

.bglinear1 {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%);
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
  top: -30%;
  right: -25%;
}

.grid2 {
  transform: perspective(800px) rotate3d(1, 0, 0, -45deg) rotate3d(0, 1, 0, -30deg)
    rotate3d(0, 0, 1, 18deg);

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 1px, transparent 2px);
  background-size: 50px 50px;
  animation: animateGrid2 2s linear infinite;
}

.bglinear2 {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%);
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
