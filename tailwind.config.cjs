/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Syncopate', 'sans-serif'],
      secondary: ['Questrial', 'sans-serif'],
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      xl: '18px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '40px',
    },

    colors: {
      violet: '#D37FFF',
      green: '#CCF04c',
      white: '#FFFFFF',
      black: '#101010',
      gray: '#525252',
      darkGreen: '#AAD01C',
      greenBG: '#1db954',
    },
    extend: {
      height: {
        'screen-25vh': '25vh',
      },
      lineHeight: {
        'extra-loose': '2.5',
        2: '12px',
        3: '14px',
      },
      gridTemplateColumns: {
        layout: 'auto 130px minmax(320px, 1000px) minmax(200px, 300px) auto',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      gridTemplateAreas: {
        wide: [
          '. header header header .',
          '. sidebar body sidebar2 .',
          'footer footer footer footer footer',
        ],
        slim: ['header', 'body', 'footer'],
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
