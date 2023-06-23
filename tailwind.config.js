/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#3a0ca3',
        'purple': '#7209b7',
        'pink': '#f72585',
        'blue': '#4361ee',
        'ocean': '#4cc9f0'
      }
    },
  },
  plugins: [],
}

