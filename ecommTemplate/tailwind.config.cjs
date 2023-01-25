/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#309975",
          primaryLight: "#58b368",
          secondary: "#dad873",
          secondaryLight: "#efeeb4",
          tertiary: "#454d66",

          secondaryHover: ""
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
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