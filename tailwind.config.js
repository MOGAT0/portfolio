/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fef6e0',
          200: '#fde9b8',
          300: '#fbd576',
          400: '#f9b83f',
          500: '#d4a017',
          600: '#b8910e',
          700: '#99760f',
          800: '#826210',
          900: '#6d5311',
        }
      }
    },
  },
  plugins: [],
}