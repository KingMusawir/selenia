/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00FFA3',
        secondary: 'rgba(27, 33, 30, 0.75)',
        bordergrad: ['#00C566', '#00FFA3'],
      },
      screens: {
        maxws: '360px',
        large: '1028px',
      },
    },
  },
  plugins: [],
};
