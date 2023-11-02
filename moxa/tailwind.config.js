/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{html,js,jsx}","./src/components/*.{html,js,jsx}"],
  theme: {
    colors: {
      'cyan_950': '#083344',
      'cyan_900': '#164e63',
      'cyan_800': '#155e75',
      "cyan_300":"#67e8f9",
      "cyan_50":"#ecfeff",
      "teal_50":"#f0fdfa",
      "transparent": "transparent"
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

