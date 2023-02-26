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
    },

    colors: {
      violet: '#D37FFF',
      green: '#CCF04c',
      white: '#FFFFFF',
      black: '#101010',
      gray: '#525252',
      darkGreen: '#AAD01C',
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        2: '12px',
        3: '14px',
      },
    },
  },
  plugins: [],
};
