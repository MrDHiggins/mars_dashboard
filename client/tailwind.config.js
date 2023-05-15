const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nasa-ofTheDay': "url('/src/assets/pages/home/Home_BG.jpg')",
        "EMCom": "url('/src/assets/pages/home/EMsize_comparison.jpg')",
      },
      zIndex: {
        'z-1': '1'
      },
    }
  },
  plugins: [],
}
