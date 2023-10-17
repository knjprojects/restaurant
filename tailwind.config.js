/** @type {import('tailwindcss').Config} 
    remove withmt if errors etc
*/

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */


const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  theme: {
    
    extend: {

      /*spacing: {
      '5px': '5px',
    },fontSize: {
      '6xl': '500%', // Custom font size for text-6xl
    },
    letterSpacing: {
      wider: '0.1em', // Custom letter spacing for tracking-wider
    },
    lineHeight: {
      '150': '150%', // Custom line height for leading-150
    },
    perspective: {
      '400': '400px', // Custom perspective value for perspective-400
    },
    /*fontFamily: {
      'pathway-gothic': ['"Pathway Gothic One"', 'sans-serif'], // Custom font family for font-pathway-gothic
    },*/
      animation: {
    fadeIn: "fadeIn 2s ease-in forwards"
    },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  },
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
        merienda: ["Merienda",...defaultTheme.fontFamily.sans],
        rustic: ['var(--font-rustic)'],
        bariol: ['var(--font-bariol)']

      },
      backgroundImage: {
        'my_bg_image': "url('/assets/img/bake.png')",
        'tele': "url('/assets/img/telephone.png')",
        'yellla': "url('/assets/img/yella.png')",
        'famous': "url('/assets/famous.png')",
        'landing':"url('https://izzycooking.com/wp-content/uploads/2021/03/Jerk-Chicken-thumbnail.jpg')",
        'roti': "url('/assets/img/food/dhalpourie.png')",
        'setup': "url('https://lh3.googleusercontent.com/p/AF1QipM8ltozlJrsGBUOcdKMCVSuwyWqL4s1dDkGrb_c=s0')",
        'setup2': "url('https://lh3.googleusercontent.com/p/AF1QipNWJE2jdvAsiWRxkzrxucBxd2Cq2vmbNP-ySwCE=s0')",
        'venue':"url('https://lh3.googleusercontent.com/p/AF1QipNN0pRsm_FeVxQBdUTPMazXVd9ondvLL2QGfHaZ=s0')",
      }

    },
  },
  plugins: [
    //require('flowbite/plugin'),
  ],

})
