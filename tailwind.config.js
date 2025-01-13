/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'navLinksActive': 'linear-gradient(to right, #DFC39D, #F8E4BE, #DFC39D, #F8E4BE, #F8E4BE)',
      },
      fontFamily: {
        'Leiko': ['Lora', 'serif'], // Leiko font family 
        'DancingScript': ['Dancing Script', 'serif'], //Dancing script font family
      }
    },
  },
  plugins: [],
}

