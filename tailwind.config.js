/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black01: '#111315',
        container: '#1B1D1F',
        text01: '#6F757C',
        yellow01: 'F6C768',
        orange01: '#ED735D',
        price: 'BEE3CC',
        button01: '#FEF7EE',
      }
      ,
      fontFamily: {
        fonText: ["DM Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

