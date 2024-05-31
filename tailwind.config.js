/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['title', 'sans-serif'],
      },
      textShadow: {
        'outline': '0 0 12px red',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: '0 0 12px red',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
