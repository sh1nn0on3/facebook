/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'drag': '1250px',
        'rightbar' : "1100px"
      },
      colors: {
        "gray-bg" : "#F0F3F4",
        "blue" : "#1A74E5"
      }
    },
  },
  plugins: [],
}

