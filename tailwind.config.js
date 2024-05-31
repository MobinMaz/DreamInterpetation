/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1500px" },
      "xl": { max: "1200px" },
      "lg": { max: "992px" },
      "md": { max: "768px" },
      "sm": { max: "576px" },
    },
    fontFamily: {
      "yekan-medium": "yekan-bakh-medium"
    },
    extend: {
      colors: {
        purple: {
          light: "#A9ACD7"
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  corePlugins: {
    preflight: false
  }
}

