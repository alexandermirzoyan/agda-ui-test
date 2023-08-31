/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'amiri-regular': 'Amiri-Regular',
      'amiri-italic': 'Amiri-Italic',
    },
    extend: {
      backgroundImage: {
        'sword-pattern': 'url(/src/assets/icons/pattern-2.svg)',
      },
      screens: {
        md: '844px',
      },
    },
    colors: {
      white: '#FFFFFF',
      'main-gold': '#9E7A43',
      'main-background': '#202020',
    },
  },
  plugins: [],
};
