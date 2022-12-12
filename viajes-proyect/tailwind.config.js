/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '3x': '1fr 7fr 1fr',
      },
      gridTemplateColumns: {
        '4x': 'repeat (auto-fill, minmax (150px, 1fr)',
      },
    },
  },
  plugins: [],
}