import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {
  state: () => {
    return {
      primaryColor: '#5438A4',
      dark: '#5438A4',
      light: '#5438A4',
      darkVariant1: '#5438A4',
      darkVariant2: '#5438A4',
      lightVariant1: '#5438A4',
      lightVariant2: '#5438A4'
    }
  },
  actions: {
    setPrimaryColor(color) {
      this.primaryColor = color
    }
  },
  persist: true
})
