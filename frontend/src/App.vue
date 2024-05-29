<template>
  <v-app>
    <v-app-bar elevation="0" style="background-color: transparent; padding: 30px">
      <template v-slot:prepend>
        <KituiIcon
          :color1="$vuetify.theme.current.dark ? 'white' : 'black'"
          size="54"
          :color2="colorStore.primaryColor"
          @click="() => $router.push({ name: 'Home' })"
          style="cursor: pointer;"
        />
      </template>
      <template v-slot:append>
        <toggle-theme />
      </template>
    </v-app-bar>
    <v-main class="main-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import KituiIcon from '@/assets/icons/Kitui-Icon.vue'
import toggleTheme from '@/components/buttons/toggleTheme.vue'
import { useColorStore } from '@/stores/colorStore'

const colorStore = useColorStore()
</script>

<style>
.main-content {
  height: 100vh;
  padding: 124px 10% 30px 10%;
  overflow-y: auto;
}
</style>
