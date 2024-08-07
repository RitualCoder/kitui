import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {
  state: () => {
    return {
      primary: '#5438A4',
      dark: '#5438A4',
      light: '#5438A4',
      darkVariant1: '#5438A4',
      darkVariant2: '#5438A4',
      lightVariant1: '#5438A4',
      lightVariant2: '#5438A4',
      textButton: '#FFFFFF'
    }
  },
  persist: true
})
