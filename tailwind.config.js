/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      colors:{
        'myblue' : '0f172a',
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",

      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}