/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Mont: ["Montserrat"],
      },
      colors: {
        VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
        LightGrayishBlue: "hsl(234, 14%, 74%)",
        GrayishBlue: "hsl(233, 13%, 49%)",
        DarkGrayishBlue: "hsl(232, 13%, 33%)",
        Lightblue: "hsl(236, 72%, 79%)",
        purple: "hsl(237, 63%, 64%)",
      },
    },
  },
  plugins: [],
};
