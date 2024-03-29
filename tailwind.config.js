/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#863DFF",
      black: "#0E0E0E",
      white: "#FAFAFA",
    },
    fontFamily: {
      title: ['Nunito', 'sans-serif'],
      text: ['PT Sans', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

