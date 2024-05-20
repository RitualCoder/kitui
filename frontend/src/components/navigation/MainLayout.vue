<template>
  <div class="layout">
    <navBar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import navBar from '@/components/navigation/navBar.vue'
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
