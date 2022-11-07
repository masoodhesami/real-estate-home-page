/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'main-purple': '#6362D7',
        'main-pink': '#FF8FE2'
      },
    },
  },
  plugins: [],
}
