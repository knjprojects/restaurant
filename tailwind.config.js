/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
        merienda: ["Merienda",...defaultTheme.fontFamily.sans]
      },
       backgroundImage: {
         'my_bg_image': "url('/assets/img/bake.png')",
         'tele': "url('/assets/img/telephone.png')",
         'yellla': "url('/assets/img/yella.png')",
         'famous': "url('/assets/img/famous.jpeg')"
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
