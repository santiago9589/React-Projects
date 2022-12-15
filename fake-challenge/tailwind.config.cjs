/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: { 'background': "url('./src/assets/header.png')" }
     },
     gridTemplateColumns: {
      '3x': 'repeat(auto-fill, minmax(250px, 1fr))',
    }
  },
  plugins: [],
}