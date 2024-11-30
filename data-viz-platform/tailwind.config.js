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
        '0.67': '0.67px',
      },
      colors: {
        'custom-green': '#C8E972',
        neutral: {
          400: '#9CA3AF',
          800: '#242424',
          900: '#111827',
        },
      },
      fontFamily: {
        roobert: ['"Roobert TRIAL"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out forwards'
      },
    },
  },
  plugins: [],
}