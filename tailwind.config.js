// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060C47", // la couleur principale
        secondary: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["inter", "sans-serif"], // la police principale
      },
    },

  },
  plugins: [],
}
