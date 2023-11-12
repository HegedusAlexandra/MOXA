/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{html,js,jsx}","./src/components/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

