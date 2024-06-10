import { defineStore } from 'pinia'

export const useTypoStore = defineStore('typo', {
  state: () => {
    return {
      fontFamily: 'Roboto',
      h1: {
        fontSize: 64,
        fontWeight: 500
      },
      h2: {
        fontSize: 48,
        fontWeight: 500
      },
      h3: {
        fontSize: 40,
        fontWeight: 500
      },
      h4: {
        fontSize: 36,
        fontWeight: 500
      },
      h5: {
        fontSize: 32,
        fontWeight: 500
      },
      h6: {
        fontSize: 24,
        fontWeight: 500
      },
      p: {
        fontSize: 16,
        fontWeight: 400
      }
    }
  },

  actions: {
    changeFontSize(size, value) {
      if (this[size]) {
        this[size].fontSize = value
        console.log(`Updated ${size} fontSize to`, value)
      } else {
        console.warn(`Invalid size: ${size}`)
      }
    },
    changeFontWeight(size, value) {
      if (this[size]) {
        this[size].fontWeight = value
      } else {
        console.warn(`Invalid size: ${size}`)
      }
    }
  },
  persist: true
})
