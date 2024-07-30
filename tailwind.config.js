/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-sky-custom': '#76e2f4',
        'purple-custom': '#301781',
        'ligth-purple': '#615dec'
      },
      fontFamily:{
        'jost': ["Jost", 'sans-serif']
      },
    },
  },
  plugins: [],
}

