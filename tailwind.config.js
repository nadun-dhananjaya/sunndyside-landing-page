/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "330px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        black: "#24303E",
        grey: "#808397",
        "light-grey": "#A7AAAD",
        yellow: "#FBD600",
        green: "#90D4C6",
      },
      fontFamily: {
        barlow: ['"Barlow"', '"sans-serif"'],
        fraunces: ['"Fraunces"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
