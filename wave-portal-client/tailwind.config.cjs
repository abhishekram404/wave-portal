/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#252627",
        primary: "#BB0A21",
        secondary: "#4B88A2",
        text: "#FFF9FB",
      },
    },
  },
  plugins: [],
};
