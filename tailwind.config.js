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
        blueBg:
          "linear-gradient(180deg, rgba(24, 255, 158, 0.00) 0%, #17FFE3 100%)",
        purpleBg:
          "linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF29C3 100%)",
        lightBlueBg:
          "linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #174AFF 100%)",
        footerlightBlueBg: "linear-gradient(180deg, #2C4982 0%, #2CD095 100%)",
        orangeBg: "linear-gradient(180deg, #82392C 0%, #D0A22C 100%)",
      },
      boxShadow: {
        inputshad:
          "0px 2px 2px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 30px 0px rgba(255, 255, 255, 0.05) inset",
      },
    },
  },
  plugins: [],
};
