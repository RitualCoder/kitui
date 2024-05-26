<template>
  <v-btn
    :variant="variant"
    v-bind="$attrs"
    @click="$emit('click')"
    :ripple="false"
    elevation="0"
    :style="{
      backgroundColor: variant === 'default' ? primaryColor : 'transparent',
      color: variant === 'default' ? 'white' : ''
    }"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
import { useColorStore } from '@/stores/colorStore'

export default {
  name: 'appButton',
  props: {
    variant: {
      type: String,
      include: ['text', 'outlined', 'default'],
      default: 'default'
    }
  },
  setup() {
    const colorStore = useColorStore()
    const primaryColor = colorStore.primaryColor

    return {
      primaryColor
    }
  }
}
</script>

<style scoped>
.v-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  padding: 15px 40px;
  letter-spacing: normal;
  transition:
    transform 0.5s,
    background-color 0.1s;
}
</style>
