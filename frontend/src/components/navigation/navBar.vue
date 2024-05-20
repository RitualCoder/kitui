<template>
  <div class="logo">
    <KituiIcon :color1="isDark ? 'white' : 'black'" size="54" />
  </div>
  <div class="toggle-theme">
    <toggleTheme />
  </div>
</template>

<script setup>
import KituiIcon from '@/assets/icons/Kitui-Icon.vue'
import toggleTheme from '@/components/buttons/toggleTheme.vue'

import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<style>
.logo {
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 100;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.toggle-theme {
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 100;
  cursor: pointer;
}
</style>
