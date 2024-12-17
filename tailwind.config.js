const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A192F', // Dark blue background
        lightBackground: '#112240', // Lighter blue for sections
        primary: '#64FFDA', // Mint green for primary elements
        secondary: '#8892B0', // Muted blue for secondary text
        text: '#CCD6F6', // Light blue for main text
        heading: '#E6F1FF', // Almost white for headings
        binary: 'rgba(105, 105, 105, 0.7)', // Grey for binary code
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        binaryFall: 'fall linear infinite',
      },
    },
  },
  plugins: [],
};