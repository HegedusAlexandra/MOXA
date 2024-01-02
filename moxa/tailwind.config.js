/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js,jsx}","./src/components/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'afacad':['Afacad', 'sans-serif']
      },
      backgroundImage: {
        'hand-pattern': "url('./assets/icons_images/mobile_color.jpg')",
      }
    },
  },
  plugins: [],
}

