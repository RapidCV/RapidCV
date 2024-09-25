/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // This assumes you have an index.html in the root
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, TSX files within src
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
