/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nasa-ofTheDay': "url('/src/assets/pages/home/Home_BG.jpg')",
      }
    }
  },
  plugins: [],
}