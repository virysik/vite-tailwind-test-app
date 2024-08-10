/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem", // Adds a new height class h-128
      },
      colors: {
        main: {
          light: "#EFF2F5",
          DEFAULT: "#869DB7",
          dark: "#192014",
        },
        second: {
          light: "#C8C4BC",
          DEFAULT: "#485362",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
