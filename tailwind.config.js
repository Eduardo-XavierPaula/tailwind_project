/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        brand: {
          50: "#FFE9E8",
          100: "#FFCBC8",
          200: "#FB9892",
          300: "#E85F56",
          400: "#E64137",
          500: "#DE281D",
          600: "#C1190F",
          700: "#A2130A",
          800: "#790903",
          900: "#550500"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
