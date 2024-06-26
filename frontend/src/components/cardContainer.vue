<template>
  <div
    class="cardContainer"
    :style="{ backgroundColor: $vuetify.theme.current.dark ? '#2f2b33' : '#ffffff' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>

<style scoped>
.cardContainer {
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
}
</style>
