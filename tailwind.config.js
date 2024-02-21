/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FB6D6C",
        secondary: "#666F80",
        accent: "#C3C8D3",
        light: "#FFFFFF",
        dark: "#000000",
      },
      fontFamily: {
        poppinsLight: ["PoppinsLight"],
        poppinsRegular: ["PoppinsRegular"],
        poppinsMedium: ["PoppinsMedium"],
        poppinsBold: ["PoppinsBold"],
      },
    },
  },
  plugins: [],
};
