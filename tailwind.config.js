module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#5d3ebc',
        'secondary-color': '#ffd300',
        'color-hover': '#7849f7',
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
