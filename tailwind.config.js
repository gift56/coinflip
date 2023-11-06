/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        blueBg:
          "linear-gradient(180deg, rgba(24, 255, 158, 0.00) 0%, #17FFE3 100%)",
        purpleBg:
          "linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF29C3 100%)",
        lightBlueBg:
          "linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #174AFF 100%)",
      },
    },
  },
  plugins: [],
};
