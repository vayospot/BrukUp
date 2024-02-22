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
        primary: "#0A0803",
        secondary: "#D0FB95",
        accent: "#D64141",
      },
      backgroundColor: {
        primary: "#0A0803",
        secondary: "#D0FB95",
        accent: "#D64141",
      },
      fontFamily: {
        poppinsLight: ["PoppinsLight"],
        poppinsRegular: ["PoppinsRegular"],
        poppinsMedium: ["PoppinsMedium"],
        poppinsBold: ["PoppinsBold"],
        questrial: ["Questrial"],
      },
    },
  },
  plugins: [],
};
