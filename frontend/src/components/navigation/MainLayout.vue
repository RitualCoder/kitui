<template>
  <div
    :style="{ backgroundColor: theme.global.current.value.dark ? '#141115' : '#F2F5F9' }"
    class="layout"
  >
    <navBar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import navBar from '@/components/navigation/navBar.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 1rem;
}
</style>
