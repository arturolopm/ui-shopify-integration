/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFA693",
        secondary: "#FFDCD3",
        tertiary: "#CAF0FF",
        // ...
      },
      fontFamily: {
        sans: ["Abhaya Libre", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
