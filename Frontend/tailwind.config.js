/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // This assumes you have an index.html in the root
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, TSX files within src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
