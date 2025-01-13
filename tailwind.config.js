/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      stroke: ['hover'],
    }
  },
  plugins: [],
}

