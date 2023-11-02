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
        'md-layout': ['A A A', 'B C D', 'E F G', 'E H H', 'I I J'],
        'lg-layout': ['A A B C', 'D E F C', 'G G F H', 'I I J J'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
