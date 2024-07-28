import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      padding: {
        top: 48,
        bottom: 48,
        left: 48,
        right: 48
      },
      breakpoints: {
        sm: 600,
        md: 950,
        lg: 1400
      },
      grid: {
        columns: 12,
        gutter: 16
      },
      maxWidth: 1400,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }
  },
  persist: true
})
