/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif']
      },
      colors: {
        'primary': '#41558a',
      }
    },
  },
  plugins: [],
}