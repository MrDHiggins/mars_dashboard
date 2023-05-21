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
        "curiosity": "url('/src/assets/Rovers/curiosity.jpg')",
        "opportunity": "url('/src/assets/Rovers/opportunity.jpg')",
        "spirit": "url('/src/assets/Rovers/spirit.jpg')",
      },
      zIndex: {
        'z-1': '1'
      },
    }
  },
  plugins: [],
}
