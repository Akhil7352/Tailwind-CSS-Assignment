/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'md': '640px',
      'lmd': '340px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

