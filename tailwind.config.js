/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '844px',
      md: '1024px',
      lg: '1440px',
      xl: '1728px',
      '2xl': '1920px',
    },
    fontFamily: {
      'amiri-regular': 'Amiri-Regular',
      'amiri-italic': 'Amiri-Italic',
    },
    extend: {
      backgroundImage: {
        'sword-pattern': 'url(/src/assets/icons/pattern-2.svg)',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#161616',
      'main-gold': '#9E7A43',
      'main-background': '#202020',
    },
  },
  plugins: [],
};
