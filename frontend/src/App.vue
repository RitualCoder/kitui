<template>
  <v-app :style="{ backgroundColor: $vuetify.theme.current.dark ? '#141115' : '#F2F5F9' }">
    <v-app-bar
      elevation="0"
      :style="{
        padding: '10px 30px',
        backdropFilter: showBlur ? 'blur(5px)' : '',
        backgroundColor: showBlur
          ? $vuetify.theme.current.dark
            ? 'rgba(20, 17, 21, 0.1)'
            : 'rgba(242, 245, 249, 0.1)'
          : 'transparent'
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
        <toggle-theme v-if="showToggleTheme" />
      </template>
    </v-app-bar>
    <v-main class="main-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import KituiIcon from '@/assets/icons/Kitui-Icon.vue'
import toggleTheme from '@/components/buttons/toggleTheme.vue'
import { useColorStore } from '@/stores/colorStore'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    KituiIcon,
    toggleTheme
  },
  data() {
    return {
      // Obtenir la route actuelle
      route: useRoute(),
      colorStore: useColorStore(),
      hideToggleOnRoutes: ['/colors'],
      routesWithoutBlur: ['/colors', '/'],
      routesWithoutToggleTheme: ['/colors']
    }
  },
  computed: {
    showBlur() {
      return !this.routesWithoutBlur.includes(this.$route.fullPath)
    },
    showToggleTheme() {
      return !this.routesWithoutToggleTheme.includes(this.$route.fullPath)
    }
  }
}
</script>

<style>
.main-content {
  overflow: hidden;
  padding: 124px 10% 30px 10%;
}
</style>
