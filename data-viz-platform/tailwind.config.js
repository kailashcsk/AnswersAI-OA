/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px',
      },
      colors: {
        'custom-green': '#C8E972',
      },
      fontFamily: {
        roobert: ['"Roobert TRIAL"', 'sans-serif'],
      },
},
  },
  plugins: [],
}