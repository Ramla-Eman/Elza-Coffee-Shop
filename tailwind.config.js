/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'navLinksActive': 'linear-gradient(to right, #DFC39D, #F8E4BE, #DFC39D, #F8E4BE, #F8E4BE)',
        'gradient-border': 'linear-gradient(to right, #DFC39D, #F8E4BE, #DFC39D, #F8E4BE, #F8E4BE)'
      },
      fontFamily: {
        'Leiko': ['Lora', 'serif'], // Leiko font family 
        'DancingScript': ['Dancing Script', 'serif'], //Dancing script font family
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow-sm': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-md': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-lg': {
        textShadow: '10px 9px 6px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-none': {
        textShadow: 'none',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },
],
}

