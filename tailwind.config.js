

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'xmd': { 'max': '979px' },
      // => @media (max-width: 979px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'futura': ['Futura', 'sans-serif'],
      },
      colors: {
        'theme': '#8708C2',
        'bgtheme': '#faf5fd',
        'extrimlighttheme': '#F5E1FF',
        'lightblack': '#333333',
        'extralightblack': '#666666',
        'bgdark': '#1C1C1C',
        'kai': '#43595C'
      },
      backgroundImage: {
        'mainlener': 'linear-gradient(244.25deg, #FFEDDF 0%, #E3E2FC 100%)'
      },
      boxShadow: {
        'cardshadow': '0px 4px 10px 0px #97979733',
        'imageshadow': '0px 1px 15px 0px #97979726'
      },
      container: {
        screens: {
          "2xl": "1129px"
        }
      },

    },
  },
  plugins: [],
};
