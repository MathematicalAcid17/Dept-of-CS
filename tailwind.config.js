/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#044A9C',
        secondary: '#6AC9FF',
      },
      spacing: {
        '16' : '1025px',
        '200' : '74px'
      }
    },
  },
  plugins: [],
}
