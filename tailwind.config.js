/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
       },
      colors: {
        primary: '#044A9C',
        secondary: '#FFD233',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *')
    },
]
}
