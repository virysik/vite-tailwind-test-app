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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
