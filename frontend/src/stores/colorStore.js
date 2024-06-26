
import { defineStore } from 'pinia';

export const useColorStore = defineStore('colorStore', {
  state: () => ({
    selectedColor: localStorage.getItem('accentColor') || '#5438A4',
  }),
  actions: {
    setSelectedColor(color) {
      this.selectedColor = color;
      localStorage.setItem('accentColor', color);
    },
  },
});