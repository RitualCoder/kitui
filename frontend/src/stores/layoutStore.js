import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    padding: {
      top: 48,
      bottom: 48,
      left: 48,
      right: 48
    },
    justifyContent: 'start', // 'start', 'center', or 'end'
    alignItems: 'start', // 'start', 'center', or 'end'
    flexDirection: 'column', // 'row' or 'column'
  }),
  actions: {},
  persist: true
})