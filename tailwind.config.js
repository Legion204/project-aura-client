/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poetsen: ["Poetsen One", "sans-serif"],
      Source: ["Source Sans 3", "sans-serif"],
    },
    colors: {
      'first': '#FFC7C7',
      'second': '#FF80B0',
      'third': '#9399FF',
      'forth': '#A9FFFD',
      'white':'#FFFF'
    },
    backgroundImage: {
      'wave': "url('/src/assets/Stacked Wave.svg')",
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

