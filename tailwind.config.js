/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores da identidade DOT Energia
        brand: {
          primary: '#00C11B', // Verde principal
          black: '#1B1B1B', // Preto da marca
          white: '#F2EFEB', // Branco off-white
        },
        // Gradações do verde principal
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00C11B', // Verde principal da marca
          600: '#00A718',
          700: '#008A14',
          800: '#006D10',
          900: '#00570C',
        },
        // Tons de cinza baseados no preto da marca
        secondary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#1B1B1B', // Preto da marca
        },
        // Tons baseados no branco da marca
        neutral: {
          50: '#F2EFEB', // Branco da marca
          100: '#f6f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
