/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        moonkids: ["Moonkids", "sans-serif"],
        plaguard: ["Plaguard", "sans-serif"],
        skranji: ["Skranji", "sans-serif"],
        caprasimo: ["Caprasimo", "sans-serif"],
        carrotfarm: ["CarrotFarm", "sans-serif"]
      }
    },
  },
  plugins: [],
}

