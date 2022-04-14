const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "485px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        welcome: ['"Poiret One"', "Cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
