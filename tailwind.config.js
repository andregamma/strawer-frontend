module.exports = {
  theme: {
    gradients: theme => ({
      // Array definition (defaults to linear gradients).
      'topaz':      ['30deg', theme('colors.orange.500'), theme('colors.pink.400')],
      'topaz-dark': ['30deg', theme('colors.orange.700'), theme('colors.pink.600')],
      'emerald':    ['to right', theme('colors.green.400'), theme('colors.teal.500')],
      'fireopal':   ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
      'relay':      ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],
      'strawer':    ['to right', '#8535F8', '#B60CFF'],

      // Object definition.
      'mono-circle': {
          type: 'radial',
          colors: ['circle', '#CCC', '#000']
      },
    }),
    extend: {
      margin: {
        '24': '24rem',
        '90': '90rem',
        '128': '36rem',
        'page': '40rem'
      },
      colors: {
        'white': '#FFF',
        'primary': '#793DF6',
        'secondary': '#AD11FD',
      },
      textColor: {
        'primary': '#793DF6',
        'secondary': '#AD11FD'
      },
      height: {
        'header': '35rem',
      },
      width: {
        'header': '103%'
      },
      borderRadius: {
        'header': '2rem'
      }
    }
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
  ]
}
