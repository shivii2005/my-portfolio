/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '95p': '95%',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        cyan: '0 8px 25px #00ffff',
      },
      animation: {
        'spin-slow-reverse': 'spin-reverse 20s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['dark'], // Enables dark mode support for custom scrollbar
    },
  },
  plugins: [], // ❌ Removed 'tailwind-scrollbar'
};

export default config;
