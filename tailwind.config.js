/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#044A9C',
        secondary: '#FFD233',
      },
    },
  },
  plugins: [],
}
