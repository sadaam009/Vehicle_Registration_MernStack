/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['font-family: "Poppins", serif;'], // Add your font here
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

