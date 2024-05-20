<script setup>
import { useColorMode } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
const colorMode = useColorMode({
  modes: {
    dark: 'dark',
    light: 'light'
  },
  attribute: 'theme'
})
</script>

<template>
  <div>
    <button v-if="colorMode === 'dark'" @click="colorMode = 'light'" class="button-dark">
      <SunIcon style="color: #afabb3; width: 30px" />
    </button>
    <button v-else @click="colorMode = 'dark'" class="button-light">
      <MoonIcon style="color: #4e4856; width: 30px" />
    </button>
  </div>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transform: scale(1.04);
  transition:
    transform 0.5s,
    background-color 0.1s;
}
.button-dark:hover {
  transform: scale(1.1);
  background-color: #3f3b43;
}

.button-dark {
  background-color: #2f2b33;
}

.button-light:hover {
  transform: scale(1.1);
  background-color: #e0e0e0;
}

.button-light {
  background-color: white;
}
</style>
