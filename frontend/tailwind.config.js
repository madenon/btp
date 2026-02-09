/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {

      fontFamily: {
lora: ["Lora", "serif"],
lato: ["Lato", "sans-serif"],
montserrat: ["Montserrat", "sans-serif"],
poppins: ["Poppins", "sans-serif"],
roboto: ["Roboto", "sans-serif"],
libre: ["Libre Baskerville", "sans-serif"],
anton: ["Anton", "sans-serif"],
merriweather: ["Merriweather", "serif"],
playfair: ["Playfair Display", "serif"],
},
    },
  },
  plugins: [],
}

