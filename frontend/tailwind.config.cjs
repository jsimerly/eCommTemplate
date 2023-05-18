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
          
          secondary: "#4F86C6",
          secondaryLight: "#e4eaf6",

          tertiary: '',
          tertiaryLight: '',

          neutralDark: "#454d66",
          neutralLight: "#aeb4c8",
          neutralOffWhite: '#f4f5f8',

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