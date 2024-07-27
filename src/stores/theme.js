// src/stores/theme.js
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    // افتراضيًا الوضع الفاتح
    themeMode: localStorage.getItem('themeMode') || 'light', 
  }),
  actions: {
    toggleTheme() {
      this.themeMode = this.themeMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', this.themeMode);
      document.documentElement.classList.toggle('dark', this.themeMode === 'dark');
    },
    setTheme(mode) {
      this.themeMode = mode;
      localStorage.setItem('themeMode', this.themeMode);
      document.documentElement.classList.toggle('dark', this.themeMode === 'dark');
    }
  }
});
