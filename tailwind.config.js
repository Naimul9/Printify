/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto : "'Roboto', sans-serif",
        cerebi: "'Cerebri Sans Bold', sans-serif"
      },
      
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'), require("tailwindcss-animate")
  ],
}

