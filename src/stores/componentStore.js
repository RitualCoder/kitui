import { defineStore } from 'pinia'

export const useComponentStore = defineStore('component', {
  state: () => {
    return {
      button: {
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        border: 2
      },
      input: {
        borderRadius: 8,
        padding: 10
      },
      card: {
        borderRadius: 8,
        padding: 10
      }
    }
  },
  persist: true
})
