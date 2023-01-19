/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#16AE74",
        yellow: "#FFCC29",
        black: "#000000",
        lightgreen1: "#E8FFD6",
        lightgreen2: "#F4FAEE",
        lightyellow: "#1E3163",
        silver: "#F0F0F0",
        white70: "rgba(255,255,255,0.5)",
      },
      container: {
        center: true,
      },
      screens: {
        "2xl": "1366px",
        xs:"300px"
      },
      boxShadow:{
        card_shadow:"0px 0px 5px 0px rgba(0,0,0,.2)",
        card_shadow_hover:"0px 0px 30px 0px rgba(0,0,0,.2)",
      },
      fontFamily:{
        iransans:"iransans"
      }
    },
  },
  plugins: [],
};
