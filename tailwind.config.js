/** @type {import('tailwindcss').Config} 
    
*/

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */


const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
        rustic: ['var(--font-rustic)']
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
    require('flowbite/plugin'),
  ],

}
