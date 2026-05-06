/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        linen: '#F0EBE3',
        blush: '#E8D5C4',
        gold: '#C4A882',
        crimson: '#8B1A1A',
        'crimson-deep': '#6B1212',
        'brown-deep': '#5C4A36',
        'brown-mid': '#8B7355',
        'brown-light': '#A89070',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"Helvetica Neue"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
