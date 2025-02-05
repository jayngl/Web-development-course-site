/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#90CAC7",
        "brand-teal-2": "#539D98",
        "stats-gray": "#4D5562",
        "stats-gray-2": "#121826",
        "stats-purple": "#7673df",
        "info-purple": "#5143B3",
      },

      width: {
        "stats-lg": "878px",
        "stats-sm": "331px",
      },
      height: {
        "header-sm": "374px",
        "Header-md": "700px",
      },

      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
