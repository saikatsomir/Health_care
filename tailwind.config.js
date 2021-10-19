module.exports = {
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'banner': 'rgb(229, 232, 225)',
      'footer': '#132F78',
      'service': '#F7F9FB',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
