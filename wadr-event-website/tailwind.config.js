/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // This makes Poppins the default font
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#f5f5f5',
      'gray-1': '#e5e5e5',
      'gray-2': '#d4d4d4',
      'gray-3': '#c4c4c4',
      'gray-4': '#b3b3b3',
      'gray-5': '#a3a3a3',
      'yellow': '#F69522',
      'purple': '#672F90',
      'purple-1': '#854DAE',
      'red': '#E60000',
     
    },
    extend: {},
  },
  plugins: [],
}

