/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightPurple': "#AB96DB",
        'pink': "#F7C5CC",
        'boldColor': "#CD313E",
        'blue': "#89AAE5",
        'lightpink':'#FFE2E9',
        'darkpink':'#FF5492',
      },
      
    },
  },
  plugins: [],
}

