/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'parisienne': 'Parisienne',
      'fira':'Fira',
      'josefin':'Josefin',
      'montserrat':'Montserrat',
    },
  },
  plugins: [],
}
