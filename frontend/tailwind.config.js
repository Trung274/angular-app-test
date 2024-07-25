/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: '#FFFFFF',
        themeSecondary: '#000000',
        themeAccent: '#b0001d',
      },
    },
  },
  plugins: [],
}