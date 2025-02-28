/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'dialog2': '1.55rem',
        'dialog1': '1.1rem',
      },
      fontFamily: {
        'dialog': ['Ligconsolata', 'sans-serif'],
      },
    },
  },
  plugins: [],
}