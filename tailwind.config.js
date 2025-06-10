/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinkCursor: {
          '0%, 100%': {
            borderColor: 'transparent'
          },
          '50%': {
            borderColor: '#ffffff'
          },
        },
      },
      animation: {
        typing: 'blinkCursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
}