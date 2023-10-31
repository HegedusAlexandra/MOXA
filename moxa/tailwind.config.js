/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{html,js,jsx}","./src/components/*.{html,js,jsx}"],
  theme: {
    colors: {
      'dark_blue': '#051728',
      "cyan_300":"#67e8f9",
      "cyan_50":"#ecfeff"
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

