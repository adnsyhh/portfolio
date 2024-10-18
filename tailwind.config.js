/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: '#f9fafb',
        sec: '#9ca3af',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

