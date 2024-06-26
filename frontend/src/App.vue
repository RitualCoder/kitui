<template>
  <v-app :style="{ backgroundColor: $vuetify.theme.current.dark ? '#141115' : '#F2F5F9' }">
    <v-app-bar
      elevation="0"
      :style="{
        backdropFilter: 'blur(5px)',
        padding: '10px 30px',
        backgroundColor: $vuetify.theme.current.dark
          ? 'rgba(20, 17, 21, 0.1)'
          : 'rgba(242, 245, 249, 0.1)'
      }"
    >
      <template v-slot:prepend>
        <KituiIcon
          :color1="$vuetify.theme.current.dark ? 'white' : 'black'"
          size="40"
          :color2="colorStore.primaryColor"
          @click="() => $router.push({ name: 'Home' })"
          style="cursor: pointer"
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
  overflow: hidden;
  padding: 124px 10% 30px 10%;
}
</style>
