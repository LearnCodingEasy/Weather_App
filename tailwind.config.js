/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // darkMode: ['selector', '[data-mode="dark"]'],
  // أو 'media' حسب تفضيلاتك
  darkMode: 'class', 

  theme: {
    extend: {},
  },
  plugins: [],
}

