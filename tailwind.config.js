/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      },
      fontFamily: {
        permanentMarker: ['Permanent Marker', 'cursive'],
        poiretOne: ['Poiret One', 'cursive'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

