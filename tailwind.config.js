/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['KaushanScript', 'sans-serif'],
        'basic': ['Dovemayo', 'sans-serif'],
      },
      textShadow: {
        'outline': '0 0 15px red',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: '0 0 15px red',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
