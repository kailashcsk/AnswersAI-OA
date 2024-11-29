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
        neutral: {
          400: '#9CA3AF',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        roobert: ['"Roobert TRIAL"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}