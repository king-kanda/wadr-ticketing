/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
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
  },
  plugins: [],
}

