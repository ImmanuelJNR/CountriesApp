module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      primaryColor : '#FFF'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
