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
      'fira': 'Fira',
      'josefin': 'Josefin',
      'montserrat': 'Montserrat',
    },
    // screens: {
    //   'mobile': '640px',
    //   // => @media (min-width: 640px) { ... } ~ sm
    //   'tablet': '768px',
    //   // => @media (min-width: 768px) { ... } ~ md
    //   'desktop': '1024px',
    //   // => @media (min-width: 1024px) { ... } ~ lg
    // }
  },
  plugins: []
}
