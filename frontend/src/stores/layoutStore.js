import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    padding: {
      top: 48,
      bottom: 48,
      left: 48,
      right: 48
    },
    justifyContent: 'start', 
    alignItems: 'start', 
    flexDirection: 'column', 
  }),
  actions: {},
  persist: true
})