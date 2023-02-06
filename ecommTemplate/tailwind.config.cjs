/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          // https://mdigi.tools/darken-color/#faf3c5 to lighten
          primary: "#4F86C6",
          primaryLight: "#e4eaf6",
          secondary: "#FAF3C5", 
          secondaryTone: {
            10:"#fefef9",
            20:"#fefdf3",
            30: '#ffffff',//"#fdfbee",
            40: "#fdfae8",
            50: "#fcf9e2",
            60: "#fcf8dc",
            70: "#fbf7d6",
            80: "#fbf5d1",
            90: "#faf4cb",
            105: "#f8efb0",
            110: "#f6ea9c",
            115: "#f5e687",
            120: "#f3e273",
          },
          tertiary: "#454d66",
          tertiaryTone: {
            100:"#f4f5f8",
            200:"#d6d9e3",
            300: "#aeb4c8",
            400: "#d6d9e3",
            500: "#373d51",
            600: "#292e3d",
            700: "#1b1e28",
            800: "#0d0f14",
            900: "#030305",

          },

          secondaryHover: ""
        },
        fontFamily: {
          roboto : ['Roboto', 'serif'],
          londrina: ['Londrina Solid', 'sans-serif']
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };