/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {},
      gridTemplateAreas: {
        'sm-layout': ['A A ', 'B C', 'B D', 'E F', 'G H', 'I H', 'J J'],
        'md-layout': ['A A A', 'B C D', 'E F G', 'E H H', 'I I J'],
        'lg-layout': ['A A B C', 'D E F C', 'G G F H', 'I I J J'],
      },
      gridTemplateColumns: {
        'sm-layout': 'repeat(2, minmax(0, 12.5rem))',
        'md-layout': 'repeat(3, minmax(0, 20.625rem))',
        'lg-layout': 'repeat(4, minmax(0, 20.625rem))',
      },
      gridTemplateRows: {
        'sm-layout': 'repeat(7, clamp(9rem, -1rem + 50vw, 12.5rem))',
        'md-layout':
          'repeat(5, clamp(13.5rem, -2.4375rem + 33.2031vw, 18.8125rem))',
        'lg-layout':
          'repeat(4, clamp(13.25rem, -0.7332rem + 21.8487vw, 19.75rem))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
