/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1200px', 
        'movies': '1400px',
      },
    },
  },
  plugins: [],
}

