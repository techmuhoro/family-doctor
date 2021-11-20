const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: 'rgb(255, 123, 123)',
      hover: 'rgb(206, 106, 106)',
      red: colors.red,
      white: colors.white,
      black: colors.black,
      pink: colors.pink,
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
