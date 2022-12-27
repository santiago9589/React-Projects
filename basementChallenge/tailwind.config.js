const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'BasementGrotesque': ['"Basement Grotesquek Sans"', ...defaultTheme.fontFamily.sans],

    },
    width: {
      '38': '152px',
      'med': '580px',
      'midum': '350px'
    },
    borderRadius: {
      'rq': '56px',
    },
    extend: {
      gridTemplateColumns: {
        'autfill': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
