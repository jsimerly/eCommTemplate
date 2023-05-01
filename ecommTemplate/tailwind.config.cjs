// const {company} = require('./constants/company_constants')

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
          secondaryLight: '',
          neutralDark: '',
          neutralLight: '',
          neutralOffWhite: '',
          
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

          errorRed: "#C76C63",
        },
        fontFamily: {
          roboto : ['Roboto', 'sans-serif'],
          londrina: ['Londrina Solid', 'sans-serif']
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        ms: "840px",
        md: "1060px",
        lg: "1280px",
        xl: "1700px",
      },
    },
    plugins: [],
  };