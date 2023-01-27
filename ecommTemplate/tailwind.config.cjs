/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#309975",
          primaryLight: "#58b368",
          secondary: "#efeeb4", 
          secondaryTone: {
            100:"#fbfaea",
            200:"#f4f4cd",
            300: "#e4e381",
            400: "#dbd957",
            500: "#a8a624",
            600: "",
            700: "",
            800: "",
            900: "#2e2e0a",

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