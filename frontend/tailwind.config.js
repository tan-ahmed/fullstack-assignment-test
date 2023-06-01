/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    colors: {
      ...colors,
      white: "#FFF",
      black: "#000",
      teal: {
        DEFAULT: "#47C4BD",
        50: "#D2F1EF",
        100: "#C3ECE9",
        200: "#A4E2DE",
        300: "#85D8D3",
        400: "#66CEC8",
        500: "#47C4BD",
        600: "#33A09A",
        700: "#267571",
        800: "#184B48",
        900: "#0A201F",
        950: "#040B0B",
      },
    },
  },
  plugins: [],
};
