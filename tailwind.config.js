/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      tall: { raw: '(min-height: 670px)' },
      xxs: '400px',
      xs: '450px',
      x2s: '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
