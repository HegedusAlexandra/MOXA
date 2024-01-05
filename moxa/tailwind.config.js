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
        'computer': "url('./assets/icons_images/laptop_color.jpg')",
        'desert': "url('./assets/icons_images/desert.png')",
      }
    },
    colors: {    
      "amber1":  "#fef3c7",
      "sky2":"#bae6fd",
      "sky3":"#7dd3fc",
      "white_op": "rgba(255, 255, 255, 0.15)",
      "white_op2": "rgba(255, 255, 255, 0.65)",
      /*I. "background":"#7BA6A1",
      "background_light":"#7BA691",
      "secondary": "#F2B705",
      "highlight":"#A62F14",
      "headline":"#590902",
      "text": "#D94929",
      "white": "fff",
      "black": "000" */
      /*II. "background":"#F3F4F5",
      "background_light":"#AFA4A5",
      "secondary": "#F1C097",
      "highlight":"#41251C",
      "headline":"#8A262E",
      "text": "#292B57",
      "white": "fff",
      "black": "000" */
      /*III.  "background":"#849696",
      "background_light":"#FCE1AF",
      "secondary": "#849696",
      "highlight":"#17384C",
      "headline":"#FF972C",
      "text": "#232D33",
      "white": "#FFFFFF",
      "black": "#000"  */
      /*IV. "background":"#A65F46",
      "background_light":"#D9AC84",
      "secondary": "#DECCB6",
      "highlight":"#F2935C",
      "headline":"#730C02",
      "text": "#232D33",
      "white": "#FFFFFF",
      "black": "#000"  */
      /*V. "background":"#E3D3C4",
      "background_light":"#FDFBFF",
      "secondary": "#E8AA9B",
      "highlight":"#67151B",
      "headline":"#161A1E",
      "text": "#232D33",
      "white": "#FFFFFF",
      "black": "#000"  */
      /*VI. "background":"#273E58",
      "background_light":"#F1ECE0",
      "secondary": "#11A0D9",
      "highlight":"#010B23",
      "headline":"#232D33",
      "text": "#E8AA9B",
      "white": "#FFFFFF",
      "black": "#000" */ 
      /* "background":"#032940",
      "background_light":"#021C26",
      "secondary": "#0FB2F2",
      "highlight":"#085A8C",
      "headline":"#3DF2E0",
      "text": "#085A8C",
      "white": "#FFFFFF",
      "black": "#000"  */
      /* "background":"#008F8C",
      "background_light":"#C7FFED",
      "secondary": "#D8FFDB",
      "highlight":"#015958",
      "headline":"#023535",
      "text": "#023535",
      "white": "#FFFFFF",
      "black": "#000"  */
      "background":"#008F8C",
      "background_light":"#F2F2F2",
      "secondary": "#308C6A",
      "highlight":"#52F2A8",
      "headline":"#023535",
      "text": "#023535",
      "white": "#FFFFFF",
      "black": "#000" 
    }
  },
  plugins: [],
}

