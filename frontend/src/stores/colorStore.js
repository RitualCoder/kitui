import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {
  state: () => {
    return {
      primaryColor: '#5438A4'
    }
  },
  actions: {
    setPrimaryColor(color) {
      this.primaryColor = color
    }
  },
  persist: true
})
