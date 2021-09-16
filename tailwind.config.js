module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#5d3ebc',
        'secondary-color': '#ffd300',
        'color-hover': '#7849f7',
      },
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
      }),
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
