/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trispace': ['Trispace', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#0A0E28',
      },
    },
  },
  plugins: [],
}
