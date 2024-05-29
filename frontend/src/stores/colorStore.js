import { defineStore } from 'pinia'

export const useColorStore = defineStore({
  id: 'colorStore',
  state: () => ({
    primaryColor: '#5438A4'
  }),
  actions: {
    setPrimaryColor(color) {
      this.primaryColor = color
    }
  },
  persist: true
})
