/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'jet': '#2F303A',
        'bg-img-top': '#030418',
        'bg-img-btm': '#060921',
        'off-white': '#D9D9D9',
        'picton-blue': '#2CB4F2'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
    container: {
      center: true
    }
  }, 
  darkMode: "class",
  plugins: [nextui()],
}
