/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-light': '#FFFFFF',
        'background-dark': '#0C0C0C',
        'card-light': '#FFFFFF',
        'card-dark': '#161616',
        'text-light': '#000000',
        'text-dark': '#F5F5F5',
        'primary-light': '#0056D2',
        'primary-dark': '#0056D2',
        'coursera-blue': '#0056D2',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}

