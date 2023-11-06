/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#0B0B0F",
        cardDark: "#1A1B23",
        gray1: "#898CA9",
        gray2: "#B982FF",
      },
      backgroundImage: {
        btnLinear: "linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)",
      },
    },
  },
  plugins: [],
};
