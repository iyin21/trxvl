/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "white-10":"rgba(255, 255, 255, 1)",
        "white-100":"#ffffff",
        "black-100":"#000000",
        "black-10":"#808080",
        "blue-100":"#2659C3"
      },
      fontSize:{
        "4xl":"72px",
        "3xl":"48px",
        xl:"32px",
        "2md":"24px",
        sm:"16px"
      },
      backgroundImage:{
        "hero-section":"url('./assets/image1.png')"
      }
    },
  },
  plugins: [],
}
