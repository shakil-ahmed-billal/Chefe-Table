/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/cover.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}