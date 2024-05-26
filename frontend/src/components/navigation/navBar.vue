<template>
  <div style="height: 150px">
    <div class="logo">
      <KituiIcon
        :color1="$vuetify.theme.current.dark ? 'white' : 'black'"
        size="54"
        :color2="colorStore.primaryColor"
      />
    </div>
    <div class="toggle-theme">
      <toggleTheme />
    </div>
  </div>
</template>

<script setup>
import KituiIcon from '@/assets/icons/Kitui-Icon.vue'
import toggleTheme from '@/components/buttons/toggleTheme.vue'
import { useColorStore } from '@/stores/colorStore'

const colorStore = useColorStore()
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
