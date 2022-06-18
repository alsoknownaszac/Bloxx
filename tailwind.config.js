// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "3xs": "360px",
      "2xs": "414px",
      xs: "480px",
      sm: "576px",
      md: "640px",
      lg: "768px",
      xl: "976px",
      "2xl": "1024px",
    },
    extend: {
      fontFamily: {
        welcome: ['"Poiret One"', "Cursive"],
      },
      screens: {
        "3xl": "1280px",
        "4xl": "1440px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  // theme: {
  //   screens: {
  //     xs: "485px",
  //     ...defaultTheme.screens,
  //   },
  //   extend: {
  //     fontFamily: {
  //       welcome: ['"Poiret One"', "Cursive"],
  //     },
  //   },
  // },
  variants: {
    extend: {},
  },
  plugins: [],
};
